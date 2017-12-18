import React from 'react';
import PropTypes from "prop-types"

class ReactMCSimpleForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      sended: false,
      error: false,
      loading: false,
      userAlreadySubscribed: false
    }
    this.fields = []
  }

  componentDidMount(){
    if (window) {
      window.ReactMCSimpleFormCallBack = res => {
        if (res.result) {
          this.setState({
            loading: false,
            sended: true,
            error: res.result !== "success",
            userAlreadySubscribed: res.msg.indexOf("already subscribed") !== -1 })
        }
      }
    }
  }

  fieldsToUrlParams(){
    const { fields } = this.props;
    let fieldParams = ''

    fields.forEach(( propField, i )=>{
      const value = this.fields[i].value
      fieldParams += '&' + propField.name + '=' + encodeURI(value)
    })

    return fieldParams;

  }

  submit(){
    const { u, id, antSpamFlag, mcBaseUrl } = this.props;

      const fields  = this.fieldsToUrlParams()

      if (fields) {

        const callback = ()=>{
          const c       = 'ReactMCSimpleFormCallBack'
          const uri     = `${mcBaseUrl}?u=${u}&id=${id}&c=${c}${fields}&${antSpamFlag}`
          const script  = document.createElement("script")

          script.src = uri
          script.async = true
          document.body.appendChild(script)
        }

        this.setState({ loading: true },callback)
    }
  }

  renderFields(){
    const { fields } = this.props
    if (fields && fields.length) {
      return fields.map((field, i)=>{

        const type  = field.type || 'text'
        const props = field.props || {}

        return (
          <div key={field.name} className={`field-container field-${field.name}`}>
            <input type={type} {...props} ref={(a)=>{ this.fields[i] = a}} />
          </div>)
      })
    }
  }

  renderSubmitMsg(){
    const { successMsg, failMsg, userAlreadySubscribedMsg } = this.props
    const { sended, error, userAlreadySubscribed } = this.state

    if (sended) {
      let msg = ''
      if (userAlreadySubscribed) {
        msg = userAlreadySubscribedMsg
      } else {
        msg = (error)? failMsg : successMsg
      }


      return (<div className="validation-msg-container">{ msg }</div>)
    }

  }

  render() {
    const { loading } = this.state
    const { submitButtonText } = this.props
    const containerClass = 'react-mailchimp-simple-form-container'
    const containerClassWithLoading = (!loading)? containerClass : `${containerClass} form-is-loading`

    return (
      <div className={containerClassWithLoading}>
        { this.renderFields() }
        { this.renderSubmitMsg() }
        <button onClick={this.submit.bind(this)}>{ submitButtonText }</button>
      </div>
    );
  }
}


ReactMCSimpleForm.propTypes = {
  fields: PropTypes.array,
  u: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  antSpamFlag: PropTypes.string.isRequired,
  mcBaseUrl: PropTypes.string.isRequired,
  successMsg: PropTypes.string.isRequired,
  failMsg: PropTypes.string.isRequired,
  userAlreadySubscribedMsg: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired

}

ReactMCSimpleForm.defaultProps = {
  fields: [{ name: 'EMAIL' }]
}

export default ReactMCSimpleForm;
