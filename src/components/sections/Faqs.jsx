import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Faqs = () => {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      bottom: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });
    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faqs">
      <Title>FAQs</Title>
      <Container>
        <Box>
          <Accordion title="How can this app help me stay away from drugs and focus on healthier activities?">
          Adventure Quest offers a diverse range of tasks and challenges designed to engage and redirect your energy
          towards positive endeavors. By immersing yourself in these activities, you'll find a healthy outlet for your time and energy,
          steering clear of negative influences like drugs.
          </Accordion>
          <Accordion title="What kind of tasks can I expect on this platform?">
          Our tasks cover a wide spectrum, including physical activities, creative pursuits, 
          educational challenges, and much more. From outdoor adventures to mindfulness exercises, 
          our goal is to provide a variety of options that cater to different interests and preferences.
          </Accordion>
          <Accordion title="How would you boost their self-esteem through tasks?">
          After completion of each task an appreciation note containing their name 
          will be shown which would result  increase in their self esteem. 
          This will urge them to complete more task.

          </Accordion>
        </Box>
        <Box>
          <Accordion
            title="How does this app promote a mindset shift towards self-focus and personal growth?"
          >
            Through task completion and engagement with our community, you'll discover a pathway towards 
            self-improvement and self-discovery. By setting and achieving goals, exploring new activities, 
            and interacting with like-minded individuals, you'll gradually cultivate a mindset focused on 
            personal growth and development.
          </Accordion>
          <Accordion
            title=" Can I connect with other users who share similar interests?"
          >
            Absolutely! Our platform encourages community engagement. You can interact with others, 
            join groups, share experiences, and even collaborate on tasks. This fosters a supportive 
            environment where you can find inspiration and motivation from fellow users.

          </Accordion>
          <Accordion
            title=" How can I get started on Adventure Quest?
"
          >
            Signing up is simple! Download the app, create an account, 
            and start exploring the various tasks and challenges available. 
            Choose the ones that resonate with you and begin your journey towards a more fulfilling and healthy lifestyle.

          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  font-weight: 500;
  color: ${(props) => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *::last-child {
      & > *::first-child {
        margin-top: 0;
      }
    }
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

export default Faqs;
