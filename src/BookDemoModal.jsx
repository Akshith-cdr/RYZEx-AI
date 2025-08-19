import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function BookDemoModal({ open, onClose }) {
  const [state, handleSubmit] = useForm("xwpqdpgy");

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>Book a Free Demo</h2>
        {state.succeeded ? (
          <p>Thank you! We'll contact you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <label>
              Full Name
              <input name="name" required />
            </label>
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label>
              Ph-No (with country code)
              <input name="phone" required />
            </label>
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />

            <label>
              Purpose
              <select name="purpose" required>
                <option value="">Select</option>
                <option value="AI Voice Agents">AI Voice Agents</option>
                <option value="AI Lead Generation">AI Lead Generation</option>
              </select>
            </label>
            <ValidationError
              prefix="Purpose"
              field="purpose"
              errors={state.errors}
            />

            <label>
              Preferred contact method
              <select name="contactMethod" required>
                <option value="">Select</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
              </select>
            </label>
            <ValidationError
              prefix="Contact Method"
              field="contactMethod"
              errors={state.errors}
            />

            <label>
              How did you hear about us?
              <select name="hearAbout" required>
                <option value="">Select</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Google">Google</option>
              </select>
            </label>
            <ValidationError
              prefix="Hear About"
              field="hearAbout"
              errors={state.errors}
            />

            <button
              type="submit"
              className="aiaf-btn aiaf-btn-primary"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        )}
      </div>
      <style>{`
        .modal-overlay {
          position: fixed; z-index: 9999; left: 0; top: 0; width: 100vw; height: 100vh;
          background: rgba(20,24,40,0.85); display: flex; align-items: center; justify-content: center;
        }
        .modal {
          background: #181c2b; color: #fff; border-radius: 16px; padding: 2rem; min-width: 340px; max-width: 95vw; box-shadow: 0 8px 32px #0005;
          position: relative;
        }
        .modal-close {
          position: absolute; right: 1rem; top: 1rem; background: none; border: none; color: #fff; font-size: 2rem; cursor: pointer;
        }
        .modal-form label {
          display: block; margin-bottom: 1rem; font-weight: 500;
        }
        .modal-form input, .modal-form select {
          width: 100%; margin-top: 0.3rem; padding: 0.6rem; border-radius: 8px; border: 1px solid #333; background: #23263a; color: #fff;
        }
        .modal-form button[type="submit"] {
          width: 100%; margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
