import React from "react";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console("Message submited: " + JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <Fade bottom>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  {...register("name", { required: true })}
                />
                <label className="form-label">Name</label>
                {errors.name && errors.name.type === "required" && (
                  <span className="invalid-feedback">Name is required</span>
                )}
              </div>
            </Fade>
          </div>
          {/* End .col-6 */}

          <div className="col-md-6">
            <Fade bottom>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  {...register(
                    "email",
                    {
                      required: "Email is Required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    },
                    { required: true }
                  )}
                />
                <label className="form-label">Email</label>
                {errors.email && (
                  <span className="invalid-feedback">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </Fade>
          </div>
          {/* End .col-6 */}

          <div className="col-12">
            <Fade bottom>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  {...register("subject", { required: true })}
                />
                <label className="form-label">Subject</label>
                {errors.subject && (
                  <span className="invalid-feedback">Subject is required.</span>
                )}
              </div>
            </Fade>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <Fade bottom>
              <div className="form-group">
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Type comment"
                  {...register("comment", { required: true })}
                ></textarea>
                <label className="form-label">Comment</label>
                {errors.comment && (
                  <span className="invalid-feedback">Comment is required.</span>
                )}
              </div>
            </Fade>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <Fade bottom>
              <div className="btn-bar">
                <button className="px-btn px-btn-theme">
                  Send your message
                </button>
              </div>
            </Fade>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </>
  );
};

export default Contact;
