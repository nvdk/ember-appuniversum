# Button

---

## Primary button

Indicates the main action of the view (only one should be used per view).

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button.hbs'}}
    <AuButton>
      Primary button
    </AuButton>

    <hr>

    <AuButton @size="large">
      Primary button - large
    </AuButton>

    <hr>

    <AuButton>
      <AuIcon @icon="pencil" @alignment="left" />
      Primary button - icon
    </AuButton>

    <hr>

    <AuButton @width="block">
      Primary button - block
    </AuButton>

    <hr>

    <AuButton @alert="true">
      Primary button - error
    </AuButton>

    <hr>

    <AuButton @loading="true">
      Primary button - loading
    </AuButton>

    <hr>

    <AuButton @disabled="true">
      Primary button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button.hbs'}}
{{/docs-demo}}

## Secondary button

Addon to a primary action (should not be used without the presence of a primary button).

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-secondary.hbs'}}
    <AuButton @skin="secondary">
      Secondary button
    </AuButton>

    <hr>
    <AuButton @skin="secondary" @size="large">
      Secondary button - large
    </AuButton>

    <hr>

    <AuButton @skin="secondary">
      <AuIcon @icon="pencil" @alignment="left" />
      Secondary button - icon
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @width="block">
      Secondary button - block
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @alert="true">
      Secondary button - error
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @loading="true">
      Secondary button - loading
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @disabled="true">
      Secondary button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button-secondary.hbs'}}
{{/docs-demo}}

## Tertiary button

Can be used as a standalone secondary action.

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-tertiary.hbs'}}
    <AuButton @skin="tertiary">
      <AuIcon @icon="pencil" @alignment="left" />
      Link button
    </AuButton>

    <hr>

    <AuButton @skin="tertiary" @size="large">
      <AuIcon @icon="pencil" @alignment="left" />
      Link button - large
    </AuButton>

    <hr>

    <AuButton @skin="tertiary" @width="block">
      <AuIcon @icon="pencil" @alignment="left" />
      Link button - block
    </AuButton>

    <hr>

    <AuButton @skin="tertiary" @alert="true">
      <AuIcon @icon="pencil" @alignment="left" />
      Link button - error
    </AuButton>

    <hr>

    <AuButton @skin="tertiary" @loading="true">
      <AuIcon @icon="pencil" @alignment="left" />
      Link button - loading
    </AuButton>

    <hr>

    <AuButton @skin="tertiary" @disabled="true">
      <AuIcon @icon="pencil" @alignment="left" />
      Link button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button-tertiary.hbs'}}
{{/docs-demo}}

## Properties

- `@skin`: [ secondary | tertiary ] - default is primary
- `@size`: [ large ] - makes a button larger
- `@width`: [ block ] - makes a button behave like a block element
- `@alert`: [ true ] - adds an alert state to the button
- `@disabled`: [ true ] - adds a disabled state to the button
- `@loading`: [ true ] - adds a loading state to the button


## Button Group

Groups and spaces buttons

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-group.hbs'}}
    <AuButtonGroup>
      <AuButton>
        Primary button in group
      </AuButton>
      <AuButton @skin="secondary">
        Secondary button in group
      </AuButton>
    </AuButtonGroup>

    <hr>
    <AuButtonGroup>
      <AuButton @size="large">
        Large primary button in group
      </AuButton>
      <AuButton @skin="secondary" @size="large">
        Large secondary button in group
      </AuButton>
    </AuButtonGroup>
  {{/demo.example}}
  {{demo.snippet 'au-button-group.hbs'}}
{{/docs-demo}}