import { useState } from 'react';
import { SendFill } from 'react-bootstrap-icons';

// Set VITE_CONTACT_ENDPOINT (e.g. a Formspree URL) in .env to send messages
// directly from the page. Without it the form opens the visitor's mail app.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;
const MAIL_TO = 'essamabdullah@outlook.sa';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { name: '', email: '', message: '', website: '' }; // `website` = honeypot

const validate = ({ name, email, message }) => {
  const errors = {};
  if (name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email address.';
  if (message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
};

export const ContactForm = () => {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (values.website) return; // a bot filled the hidden field
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    };

    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio message from ${payload.name}`);
      const body = encodeURIComponent(`${payload.message}\n\n— ${payload.name} (${payload.email})`);
      window.location.href = `mailto:${MAIL_TO}?subject=${subject}&body=${body}`;
      setStatus('success');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setValues(EMPTY);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  const sending = status === 'sending';

  return (
    <form className='contact-form' onSubmit={onSubmit} noValidate>
      <h3 className='contact-form-title'>Send Me a Message</h3>
      <p className='contact-form-sub'>Fill in the form and I'll get back to you soon.</p>
      <span className='contact-title-line' />

      <div className='cf-row'>
        <div className='cf-field'>
          <label htmlFor='cf-name'>Name</label>
          <input id='cf-name' name='name' type='text' autoComplete='name' placeholder='Your name' value={values.name}
            onChange={onChange} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'cf-name-err' : undefined} />
          {errors.name && <span className='cf-error' id='cf-name-err'>{errors.name}</span>}
        </div>
        <div className='cf-field'>
          <label htmlFor='cf-email'>Email</label>
          <input id='cf-email' name='email' type='email' autoComplete='email' placeholder='you@example.com' value={values.email}
            onChange={onChange} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'cf-email-err' : undefined} />
          {errors.email && <span className='cf-error' id='cf-email-err'>{errors.email}</span>}
        </div>
      </div>

      <div className='cf-field'>
        <label htmlFor='cf-message'>Message</label>
        <textarea id='cf-message' name='message' rows={5} placeholder='How can I help you?' value={values.message}
          onChange={onChange} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'cf-message-err' : undefined} />
        {errors.message && <span className='cf-error' id='cf-message-err'>{errors.message}</span>}
      </div>

      {/* Honeypot: hidden from people, tempting for bots */}
      <div className='cf-hp' aria-hidden='true'>
        <label htmlFor='cf-website'>Website</label>
        <input id='cf-website' name='website' type='text' tabIndex={-1} autoComplete='off'
          value={values.website} onChange={onChange} />
      </div>

      <button type='submit' className='cf-submit' disabled={sending}>
        {sending ? 'Sending…' : <>Send Message <SendFill size={16} /></>}
      </button>

      <p className='cf-status' role='status' aria-live='polite'>
        {status === 'success' && (ENDPOINT
          ? 'Thank you! Your message has been sent.'
          : 'Your email app should open with the message ready to send.')}
        {status === 'error' && (
          <span className='cf-error'>
            Something went wrong. Please try again or email me at {MAIL_TO}.
          </span>
        )}
      </p>
    </form>
  );
};
