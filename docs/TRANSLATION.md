# Internationalisation

We need to deal with formatting numbers, dates, and translating strings for displaying to people. The application handles this using [react-intl](https://github.com/yahoo/react-intl) which is a part of [FormatJS](http://formatjs.io/) and conforms to the new [intl](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl) standards.

## Formatting numbers and dates

Numbers and date formatting must be handled using the React components and JS APIS which are part of the [react-int-api](https://github.com/yahoo/react-intl/wiki).

Eg:
```
<FormattedDate value={date}/>

```

formats the date in the current format.

You can see more examples of this in TranslationDemo component at src/js/transalation/demo.

## Message Translation

Messages must be handled using FormattedMessage and FormattedHTML components. The messages specified using these components are automatically translated by the application into the language chosen by the user. The translations for these messages must be provided upfront - but more on that below.

Eg :
```
<FormattedMessage
      id="InfoPage.greeting"
      description="Greeting to welcome the user to the app"
      defaultMessage="Hello, {name}!"
      values={{
        name: 'Eric'
      }}
    />
```
formats the message "Hello, {name}!" with name as a parameter.

You can see more examples of this in TranslationDemo component at src/js/transalation/demo.

### Prepare translation messages

The messages marked for translation (using FormattedMessage and FormattedHTML) are collected into a single messages file using a commandline utility.

To add any newly added translatable messages into the translation messages run

```
npm run prep-translations
```

The src/js/translation/messages/messages.json is updated with newly added translatable messages on running this. For each translatable message, there would be an entry with

id - The unique id for this message as used in the UI Code
description - Some context or message the specified by the developer
defaultMessage - Default message if translation is not found

Eg :
```
{
  "id": "InfoPage.greeting",
  "description": "Greeting to welcome the user to the app",
  "defaultMessage": "Hello, {name}!"
}
```

### Check if all translation is done

To check if translation is specified for all messages run

```
npm run check-translations
```

This would check if translations are available in all the specified languages are available in src/js/translation/locales folder.

It would automatically add translations that are not specified with the default message. It would then list all translations that are not specified (or is same as the default translation). It would also flag duplicate messages

Eg:


```
Duplicate message id: InfoPage.greeting
Duplicate message id: InfoPage.message

Maintaining nl.json:

Untranslated keys:
  InfoPage.greeting: Hello, {name}!
  InfoPage.message: Lorem ipsum dolor
  TestPage.greeting: Hoi, {name}!

```

If all translations are available then you should get the message below

```
Perfectly maintained, no remarks!
```

### Add missing translations

You can send the files in src/js/translation/locales to translators for translation when you newly add translation for a language. You can additionally send the messages file so that the translators can get additional context messages.

The translation for each file should have the translation specified for each id in the messages file.

Eg :
```
"InfoPage.greeting": "Hoi, {name}!"
```

By default the agove utility generates them with the default messages. {} braces are parameters into the message.

For incremental iterations you can run the above utility to find translations that are missing.

In case the translation in a language is same as the default message, then you need to add it to the specific languages white list file.



