# react-mailchimp-subscribe-forme
This is just a simple and clean react component for those who need to subscribe users

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
##explaining better the props parameters

The u, id and mcBaseUrl is you can get it in mailchimp by going to lists > signup forms > Embedded forms and extract from Copy / paste option from the form action attribute, the mcBaseUrl is a input text which is hidden by the css style.

