import submitForm, { SUBMIT_URL } from './submitForm';

export default function App() {
  return (
    <form
      method="POST"
      action={SUBMIT_URL}
      onSubmit={submitForm}>
      <label>Name</label>
      <input name="name" type="text"/>
      <label>Email</label>
      <input name="email" type="text"/>
      <label>message</label>
      <input name="message" type="text"/>
      <button type="submit">send</button>
    </form>
  );
}
