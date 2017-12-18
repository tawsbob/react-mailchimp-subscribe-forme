# react-mailchimp-subscribe-forme
This is just a simple and clean react component for those who need to subscribe users

I did not stylize the form to avoid problems with conflicting styles, even because it's easy to style a form even though it's from scratch

## How to use
> `import ReactMCSimpleForm from 'react-mailchimp-subscribe-forme'`

## And then

    <ReactMCSimpleForm
          fields={[
            {
              name: 'EMAIL',
              props: {
                placeholder: 'Type your email here'
              }
            },
            {
              name: 'FNAME',
              props: {
                placeholder: 'Type your first name here'
              }
            }
          ]}
          u="f2c1f6436b6355132"
          id="6073f68"
          antSpamFlag="b_f2c1f6436b63551329714d6a9"
          mcBaseUrl="https://winnin.us17.list-manage.com/subscribe/post-json"
          successMsg="your submit success msg!!!"
          failMsg="your submit fail msg!!!"
          userAlreadySubscribedMsg="your msg if user is already subscribe"
          submitButtonText="subscribe"
          />

## Explaining better the props parameters

The **u**, **id** and **mcBaseUrl** is you can get it in mailchimp by going to **lists > signup forms > Embedded forms** and extract from Copy / paste option from the **form action attribute**, the **antSpamFlag** is a input  text value which is hidden by the css style.

And **fields** props is an array of object fields that name is the input text name of the field on mailchimp embedded forms code and props attr is props to pass to input in case you need attributes type maxlength, className or things like that.

**Remember that this component is simple and only sends fields of type string**

##Form load state

When the form is loading the container of form will have a class  called form-is-loading that you can use to help stylize your form

##ROADMAP
 - Validations
