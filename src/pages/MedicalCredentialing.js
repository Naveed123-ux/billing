import React from "react";

const MedicalCredentialing = () => {
  return (
    <div className="container my-5">
      {/* Section: Medical Credentialing */}
      <div className="text-center mb-5 " style={{ marginTop: "150px" }}>
        <h1 className="display-5 fw-bold ">Medical Credentialing</h1>
      </div>

      {/* Core Features */}
      <div className="mb-5">
        <h3 className="text-center mb-4">
          Core Features of Our Credentialing Services
        </h3>
        <p className="text-center mb-5">
          CareCloud’s innovative approach combines technology and expert support
          to streamline provider enrollment and reduce delays.
        </p>

        <div className="row g-4">
          {[
            {
              title: "Seamless Onboarding with Introductory Emails",
              desc: "Simplify the start of your credentialing journey with automated guidance and support.",
            },
            {
              title: "Comprehensive Research & Verification",
              desc: "We verify credentials and history to ensure providers meet insurance standards.",
            },
            {
              title: "Hassle-Free Application Submission for Faster Approvals",
              desc: "Our experts meticulously review applications, ensuring compliance and expediting approvals.",
            },
            {
              title: "Stay Informed with Real-Time Approval Notifications",
              desc: "Instant updates let providers track approvals and manage compliance without disruptions.",
            },
            {
              title: "Track Every Step with Our Credentialing Status Grid",
              desc: "Monitor progress, renewals, and key milestones—all in one place.",
            },
            {
              title: "Proactive Application Follow-Ups",
              desc: "We proactively resolve issues, ensuring a faster credentialing process.",
            },
            {
              title: "Seamless Revalidation for Continuous Compliance",
              desc: "We monitor credentials to keep them valid and up to date.",
            },
          ].map((feature, index) => (
            <div className="col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-light py-5 mb-5 rounded">
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="p-3">
              <h4>Faster Onboarding</h4>
              <p>
                Reduce administrative burdens and speed up provider integration.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <h4>Unwavering Support</h4>
              <p>
                Expert assistance to navigate practice management and reduce
                billing delays.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <h4>Expert Guidance</h4>
              <p>
                Specialized professionals ensure a smooth, error-free
                credentialing process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-5 text-center">
        <h3>Testimonials</h3>
        <div
          className="bg-light p-4 rounded mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <p className="mb-0">
            <em>
              "CareCloud simplifies credentialing and enrollment, ensuring
              compliance while minimizing administrative overhead."
            </em>
          </p>
          <p className="mt-3 mb-1 fw-bold">— Jane Sinclair, Office Manager</p>
          <p className="text-muted">Arcadia Dermatology</p>
        </div>
        <div className="mt-3">
          <p className="d-inline-block bg-white px-3 py-2 rounded shadow-sm">
            <strong>4.8 / 5.0</strong>
          </p>
          <p className="text-muted mt-2">Rated on G2, Capterra, and Google</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-primary text-white p-5 rounded">
        <h2 className="mb-3">Streamline Your Practice with CareCloud</h2>
        <p className="mb-4">
          Discover how our platform can transform your workflow.
        </p>
        <button className="btn btn-light btn-lg me-3">Get Started</button>
        <button className="btn btn-outline-light btn-lg">
          Talk to an Expert
        </button>
      </div>

      {/* FAQ Section (Optional) */}
      <div className="mt-5">
        <h3>Frequently Asked Questions</h3>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                What is provider credentialing?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Provider credentialing is the process of verifying a healthcare
                provider’s qualifications and affiliations to ensure they meet
                insurance and regulatory standards.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                How does CareCloud speed up enrollment?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                CareCloud offers a streamlined, technology-driven process with
                expert follow-ups and real-time tracking to reduce delays and
                errors.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCredentialing;
