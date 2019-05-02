import moment from 'moment';
import { getUTCDateTime, getLocalDateTime, getLocalDateObj, getElapsedTime, getTimeRemaining } from '../date-utils';

describe('date utils', () => {
  describe('getUTCDateTime', () => {
    it('should return an empty string when called without arguments', () => {
      expect(getUTCDateTime()).toBe('');
    });

    it('should return an empty string when called with an empty string', () => {
      expect(getUTCDateTime('')).toBe('');
    });

    it('should return an empty string when called with null', () => {
      expect(getUTCDateTime(null)).toBe('');
    });

    it('should return an empty string when called with undefined', () => {
      expect(getUTCDateTime(undefined)).toBe('');
    });

    it('should return formatted date when called with utcDate', () => {
      const utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
      expect(getUTCDateTime(utcDate)).toBe('1996-12-01 12:00:00.000');
    });

    it('should return formatted date when called with utcDate and date format', () => {
      const utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
      expect(getUTCDateTime(utcDate, 'YYYY')).toBe('1996');
    });
  });

  describe('getLocalDateTime', () => {
    it('should return an empty string when called without arguments', () => {
      expect(getLocalDateTime()).toBe('');
    });

    it('should return an empty string when called with an empty string', () => {
      expect(getLocalDateTime('')).toBe('');
    });

    it('should return an empty string when called with null', () => {
      expect(getLocalDateTime(null)).toBe('');
    });

    it('should return an empty string when called with undefined', () => {
      expect(getLocalDateTime(undefined)).toBe('');
    });

    it('should return formatted date when called with utcDate', () => {
      const utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
      const expectedDate = moment(moment.utc(utcDate).toDate()).format('YYYY-MM-DD hh:mm:ss.SSS');
      expect(getLocalDateTime(utcDate)).toBe(expectedDate);
    });

    it('should return formatted date when called with utcDate and dateFormat', () => {
      const utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
      const dateFormat = 'YYYY-MM-DD';
      const expectedDate = moment(moment.utc(utcDate).toDate()).format(dateFormat);
      expect(getLocalDateTime(utcDate, dateFormat)).toBe(expectedDate);
    });
  });

  describe('getLocalDateObj', () => {
    it('should return an empty string when called without arguments', () => {
      expect(getLocalDateObj()).toBe('');
    });

    it('should return an empty string when called with an empty string', () => {
      expect(getLocalDateObj('')).toBe('');
    });

    it('should return an empty string when called with null', () => {
      expect(getLocalDateObj(null)).toBe('');
    });

    it('should return formatted date when called with utcDate', () => {
      const utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
      expect(getLocalDateObj(utcDate)).toEqual(moment.utc(utcDate).toDate());
    });
  });

  describe('getElapsedTime', () => {
    it('should return an empty string when called without arguments', () => {
      expect(getElapsedTime()).toBe('');
    });

    it('should return an empty string when called with an empty string', () => {
      expect(getElapsedTime('')).toBe('');
    });

    it('should return an empty string when called with null', () => {
      expect(getElapsedTime(null)).toBe('');
    });

    it('should return a time span string when called with utcDate', () => {
      const utcDate = new Date(Date.now() - 30000);
      expect(getElapsedTime(utcDate)).toBe('half a minute ago');
    });
  });

  describe('getTimeRemaining', () => {
    it('should return an object with default values when called', () => {
      const result = getTimeRemaining();
      expect(result.ms >= 0 && result.ms <= 10).toBeTruthy();
      expect(result.readableFormat).toBe('a few seconds');
      expect(result.rem === '0h 00m overdue' || result.rem === '0h 00m').toBeTruthy();
    });

    it('should return an object with default values when called with an empty string', () => {
      expect(getTimeRemaining('')).toEqual({ rem: '', ms: '' });
    });

    it('should return an object with default values when called with an empty string', () => {
      const utcDate = moment().add(7, 'days').utc();
      const result = getTimeRemaining(utcDate);
      expect(result.readableFormat).toEqual('7 days');
      expect(result.rem).toMatch(/(6 days, 23h 59m)?(7 days, 0h 0m)?/);
      expect(result.ms <= 604800000 && result.ms >= (604790000)).toBeTruthy();
    });

    it('should return an object overdue mention when called a moment in the past', () => {
      const utcDate = moment().subtract(7, 'days').utc();
      const result = getTimeRemaining(utcDate);
      expect(result.readableFormat).toEqual('7 days');
      expect(result.rem).toMatch(/(6 days, 23h 59m overdue)?(7 days, 0h 0m overdue)?/);
    });
  });
});
