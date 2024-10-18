<template>
  <main class="about-page">
    <header>
      <h1>About Us</h1>
      <p>We are dedicated to delivering exceptional experiences.</p>
    </header>

    <section class="mission">
      <h2>Our Mission</h2>
      <p>
        To empower individuals and organizations by providing high-quality
        solutions.
      </p>
    </section>

    <section class="team">
      <h2>Meet Our Team</h2>
      <div class="team-members">
        <div class="team-member">
          <img src="../assets/team-member1.jpg" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>CEO & Founder</p>
        </div>
        <div class="team-member">
          <img src="../assets/team-member2.jpg" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>CTO</p>
        </div>
        <div class="team-member">
          <img src="../assets/team-member3.jpg" alt="Team Member 3" />
          <h3>Alice Johnson</h3>
          <p>Lead Developer</p>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <h2>What Our Clients Say</h2>
      <blockquote>
        <p>"This team transformed our project! Highly recommend!"</p>
        <footer>— Client A</footer>
      </blockquote>
      <blockquote>
        <p>"Their expertise and commitment are unmatched!"</p>
        <footer>— Client B</footer>
      </blockquote>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",
});
</script>

<style lang="scss" scoped>
.about-page {
  padding: 2rem;
  text-align: center;

  header {
    margin-bottom: 2rem;
  }

  .mission,
  .team,
  .testimonials {
    margin: 2rem 0;

    h2 {
      color: var(--primary);
    }
  }

  .team-members {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    .team-member {
      border: 1px solid var(--grey);
      border-radius: 10px;
      padding: 1rem;
      width: 200px;
      text-align: center;

      img {
        width: 100%;
        border-radius: 50%;
      }

      h3 {
        margin: 0.5rem 0;
      }

      p {
        color: var(--dark);
      }
    }
  }

  blockquote {
    border-left: 5px solid var(--primary);
    padding-left: 1rem;
    margin: 1rem 0;
    font-style: italic;

    footer {
      text-align: right;
      color: var(--grey);
    }
  }
}
</style>
