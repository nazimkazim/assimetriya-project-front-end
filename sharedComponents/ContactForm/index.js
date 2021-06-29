import { FORM, InputContainer, TextArea, Button } from "../../styles/contact.form.styles";

FORM;

const ContactForm = ({ handleOnSubmit }) => {
  return (
    <>
      <FORM method="post" onSubmit={ handleOnSubmit }>
        <InputContainer>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="message">Message</label>
          <TextArea rows="4" type="text" name="message" />
        </InputContainer>
        <InputContainer>
          <Button>Submit</Button>
        </InputContainer>
      </FORM>
    </>
  );
};

export default ContactForm;