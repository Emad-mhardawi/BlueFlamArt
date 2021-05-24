import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h3 className="testimonials-title">Testimonials</h3>
      <div className="testimonials-cards">
        <div className="testimonials-card">
          <div className="testimonials-card-header">
            <div className="testimonials-card-image">
              <img src="https://pbs.twimg.com/profile_images/980145664712740864/aNWjR7MB_400x400.jpg" 
              alt='avatar'
              />
            </div>
            <h3>I’m recommending you to all my friends</h3>
          </div>
          <p>
            My sweetheart loved the portrait! You not only captured her image so
            well but unveiled and projected my feelings and thoughts through it.
            The depth of your work is really impressive. You are the best and I
            will recommend you and your services to all my friends!
          </p>
        </div>

        <div className="testimonials-card">
          <div className="testimonials-card-header">
            <div className="testimonials-card-image">
              <img src="https://imgix.bustle.com/rehost/2016/9/13/98c6b94f-014a-467a-80b0-0167b9796329.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress"
              alt='avatar'
              />
            </div>
            <h3>Thank you for your creative paintings!</h3>
          </div>
          <p>
            You're a gifted and masterful artist who is able to capture the
            essence of people with such depth and accuracy, and at the same time
            weave in the intricacies of a beautifully composed grand work of
            art. Each of your pieces is unique, yet identifiably bears your
            signature style.
          </p>
        </div>

        <div className="testimonials-card">
          <div className="testimonials-card-header">
            <div className="testimonials-card-image">
              <img src="https://www.machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1.jpg"
              alt='avatar' 
              />
            </div>
            <h3>You create amazing and captivating paintings!</h3>
          </div>
          <p>
            The Blue Sea painting I received from you is so beautiful and
            perfect in every way. The lusciousness of the colors pops off the
            surface. I am in love with it. It is even better in person and all
            my visitors and guests admire your work. I know I will be a
            returning customer from now on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
