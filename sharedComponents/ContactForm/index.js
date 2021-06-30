import { FORM, InputContainer, TextArea, Button } from "../../styles/contact.form.styles";

FORM;

const ContactForm = ({ handleOnSubmit, setMessage, setEmail, setName, email, name, message }) => {
  return (
    <>
      <FORM method="post" onSubmit={ handleOnSubmit }>
        <InputContainer>
          <label htmlFor="name">Name</label>
          <input
            onChange={ (e) => setName(e.target.value) }
            value={ name }
            type="text"
            name="name" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <input
            onChange={ (e) => setEmail(e.target.value) }
            value={ email }
            type="text"
            name="email" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="message">Message</label>
          <TextArea
            onChange={ (e) => setMessage(e.target.value) }
            value={ message }
            rows="4"
            type="text"
            name="message" />
        </InputContainer>
        <InputContainer>
          <Button>Submit</Button>
        </InputContainer>
      </FORM>
    </>
  );
};

export default ContactForm;