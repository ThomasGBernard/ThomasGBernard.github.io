import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WorkWithMe.css";
import { workWithMe, services } from "../../portfolio";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

const serviceOptions = [
  ...services.map((s) => s.title),
  ...workWithMe.otherOptions,
];

// FormSubmit's AJAX endpoint: the form posts JSON and stays on the page
const endpoint = `https://formsubmit.co/ajax/${workWithMe.email}`;

// Pre-select a service with /work-with-me?service=<service id>
function initialService(search) {
  const id = new URLSearchParams(search || "").get("service");
  const match = services.find((s) => s.id === id);
  return match ? match.title : "";
}

export default function WorkWithMe(props) {
  const theme = props.theme;
  const [fields, setFields] = useState({
    name: "",
    email: "",
    organisation: "",
    service: initialService(props.location && props.location.search),
    message: "",
    consent: false,
    _honey: "", // spam trap, stays empty for humans
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [serverMessage, setServerMessage] = useState("");

  const update = (key) => (e) =>
    setFields({
      ...fields,
      [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (fields._honey) return;
    setStatus("sending");
    setServerMessage("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: fields.name,
          Email: fields.email,
          "Company / organisation": fields.organisation || "-",
          Service: fields.service,
          Message: fields.message,
          _replyto: fields.email,
          _subject: `Website enquiry: ${fields.service} (${fields.name})`,
          _template: "table",
          _captcha: "false",
          _honey: fields._honey,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && String(data.success) === "true") {
        setStatus("sent");
      } else {
        // e.g. "This form needs Activation..." before the first activation
        setServerMessage(data.message || `HTTP ${res.status}`);
        setStatus("error");
      }
    } catch (err) {
      setServerMessage(err.message || "Network error");
      setStatus("error");
    }
  };

  const inputStyle = {
    color: theme.text,
    backgroundColor: theme.body,
    borderColor: theme.secondaryText,
  };
  const mailto = `mailto:${workWithMe.email}?subject=${encodeURIComponent(
    "Website enquiry"
  )}`;

  return (
    <div className="wwm-main">
      <Header theme={theme} />
      <div className="wwm-body">
        <h1 className="wwm-title" style={{ color: theme.text }}>
          {workWithMe.title}
        </h1>
        <p className="wwm-intro" style={{ color: theme.secondaryText }}>
          {workWithMe.description}
        </p>

        {status === "sent" ? (
          <div
            className="wwm-card wwm-success"
            style={{ backgroundColor: theme.compImgHighlight }}
          >
            <h2 style={{ color: theme.text }}>{workWithMe.successTitle}</h2>
            <p style={{ color: theme.secondaryText }}>
              {workWithMe.successText}
            </p>
            <Link to="/services" style={{ color: theme.imageHighlight }}>
              Back to services →
            </Link>
          </div>
        ) : (
          <form
            className="wwm-card"
            style={{ backgroundColor: theme.compImgHighlight }}
            onSubmit={onSubmit}
          >
            <div className="wwm-row">
              <label style={{ color: theme.text }}>
                Name *
                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={fields.name}
                  onChange={update("name")}
                  style={inputStyle}
                />
              </label>
              <label style={{ color: theme.text }}>
                Email *
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={fields.email}
                  onChange={update("email")}
                  style={inputStyle}
                />
              </label>
            </div>

            <label style={{ color: theme.text }}>
              Company / organisation
              <input
                type="text"
                autoComplete="organization"
                value={fields.organisation}
                onChange={update("organisation")}
                style={inputStyle}
              />
            </label>

            <label style={{ color: theme.text }}>
              Service you are interested in *
              <select
                required
                value={fields.service}
                onChange={update("service")}
                style={inputStyle}
              >
                <option value="" disabled>
                  Choose a service
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>

            <label style={{ color: theme.text }}>
              Message *
              <textarea
                required
                rows={7}
                placeholder="Your site or dataset, what you need to find out, and any deadline."
                value={fields.message}
                onChange={update("message")}
                style={inputStyle}
              />
            </label>

            {/* Spam trap: hidden from people, filled in by bots */}
            <input
              type="text"
              name="_honey"
              className="wwm-honey"
              tabIndex="-1"
              autoComplete="off"
              value={fields._honey}
              onChange={update("_honey")}
            />

            <label
              className="wwm-consent"
              style={{ color: theme.secondaryText }}
            >
              <input
                type="checkbox"
                required
                checked={fields.consent}
                onChange={update("consent")}
              />
              <span>
                {workWithMe.privacyNote}{" "}
                <Link to="/legal" style={{ color: theme.imageHighlight }}>
                  Terms & Privacy
                </Link>
              </span>
            </label>

            {status === "error" && (
              <p className="wwm-error" role="alert">
                Sorry, the message could not be sent. Please try again, or write
                to me directly at <a href={mailto}>{workWithMe.email}</a>.
                {serverMessage && (
                  <span className="wwm-error-detail">
                    Details: {serverMessage}
                  </span>
                )}
              </p>
            )}

            <button
              type="submit"
              className="main-button wwm-submit"
              disabled={status === "sending"}
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
              }}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            <p className="wwm-alt" style={{ color: theme.secondaryText }}>
              Prefer email? Write to{" "}
              <a href={mailto} style={{ color: theme.imageHighlight }}>
                {workWithMe.email}
              </a>
            </p>
          </form>
        )}
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
