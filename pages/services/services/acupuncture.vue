<template>
  <v-container>
    <v-row justify="space-between">
      <v-col v-for="(imageCard, i) in imageCards" :key="i" cols="12" sm="6">
        <v-img :src="imageCard" aspect-ratio="1.5" contain></v-img>
      </v-col>
      <v-col cols="12">
        <v-card flat>
          <v-card-title
            class="text-grey-darken-3 font-weight-bold text-h6 text-lg-h5"
            >Acupuncture</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            All the doctors at Metronet Chiropractic Clinic Wayzata are certified in
            acupuncture and meridian therapy. By combining traditional Chinese
            acupuncture technique with high-tech Electronic Meridian Imaging
            (EMI), the doctors are able to diagnose and treat conditions that
            are undetectable to most physicians.
          </v-card-text>
          <v-card-title
            class="text-grey-darken-3 font-weight-bold text-h6 text-lg-h5"
            >What is Acupuncture?</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            Acupuncture, simply stated, is a health science which is used to
            successfully treat both pain and dysfunction in the body.Acupuncture
            has its roots deeply planted in China. In fact, authorities agree
            the science is between 5,000 to 7,000 years old. Its use spread
            throughout ancient Egypt, the Middle East, the Roman Empire, and
            later into Western Europe, as merchants and missionaries to China
            told of the amazing discoveries the people of the Orient had
            developed. <br />
            Acupuncture did not become known on a national level in the U.S.
            until 1971 when diplomatic relations between China and America were
            relaxed.At first glimpse, Acupuncture appears strange; as its
            primary notoriety is the utilization of needles placed in the skin
            at various locations to relieve pain or affect a body part.Early
            Chinese physicians discovered there is an energy network traversing
            just below the surface of the skin in which communicates from the
            exterior to the internal organs and structures at over 1,000
            “Acupoints” on the body. This energy works in harmony with the
            body”s circulatory, nervous, muscular, digestive, genitourinary and
            all other systems of the body. <br />
            When this vital energy becomes blocked or weakened, an effect in a
            body system or anatomic location becomes evident. Stimulation of one
            or a combination of key “Acupoints” on the body may restore harmony
            to the affected area. Historians have stated, “More people have
            benefited from Acupuncture over the course of fifty centuries than
            the combined total of all other healing sciences, both ancient and
            modern.”
          </v-card-text>

          <v-card-title
            class="text-grey-darken-3 font-weight-bold text-h6 text-lg-h5"
            >Acupuncture FAQs</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            Below you’ll find answers to some of the most frequently asked
            questions about Acupuncture. We are constantly adding most asked
            question to this page so if you have a question and don’t see your
            answer, don’t hesitate to email us at
            <a
              href="mailto:cfokumahlah@hotmail.com"
              class="text-decoration-none font-weight-bold text-blue-darken-4"
              >cfokumahlah@hotmail.com</a
            >
          </v-card-text>

          <v-card-text>
            <v-expansion-panels>
              <v-expansion-panel
                v-for="(expansion, i) in expansion1"
                :key="i"
                elevation="0"
                color="blue"
                :title="expansion.title"
                :text="expansion.text"
              >
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useServicesStore } from "@/store/service";
import { ref, onMounted } from "vue";

const current = useServicesStore();

const imageCards = ref([
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675902822/chriopractor/acupuncture-640w_ltvyrc.jpg",
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675902821/chriopractor/acupuncture1-640w_kgc9zh.jpg",
]);

const expansion1 = ref([
  {
    title: "How does it work?",
    text: `Far too often in the medical professions, a patient is told after extensive examination, “There is nothing wrong, It is all in your head,” or “Sorry, you”ll have to learn to live with it.” The examining doctor, unable to find the cause of the problem, has little else to tell the patient. Fortunately, many physicians are now referring their patients for an Acupuncture evaluation as a last resort.The human body”s energy flow courses over twelve meridians or channels that are normally well balanced. If a disruption of energy flow exists, it can alter the entire system, producing pain or symptoms in the body.If we were to compare a 175 pound man on one end of a seesaw and a 45 pound child on the other end, it becomes obvious the seesaw would be “broken” due to the fact the heavier person would be sitting on the ground and the lighter would be dangling in the air. Even though the seesaw is producing a symptom of being broken-extensive examination would not reveal anything wrong with the seesaw. The obvious answer is in the balance. Correction of the balance corrects the problem.This is Acupuncture”s goal – to restore normalcy to the body”s energy balance by utilizing a combination of Acupoints located on the twelve meridians. This is accomplished by a variety of means, the needle is just one.Medical research continues in this country and others to attempt to explain in western scientific terms what the ancient Chinese seventy centuries earlier described. Today, many theories have been postulated as to why Acupuncture is so effective in pain control. However, as more discoveries are made, more research is indicated.bold, and add links.`,
  },
  {
    title: "Is treatment painful?",
    text: `One would assume inserting a needle into the skin would be painful since most of us can relate to being stuck with a pin or having a hypodermic injection. However, four Acupuncture needles can easily be inserted into the hollow tube of a hypodermic needle! Because of the extreme slenderness of the needle, most people compare the sensations “less than a mosquito bite.” A phenomena referred to as “TEHCHI” occurs when the energy is contacted. This sensation is felt as a mild to moderate heaviness or tingling.Needles obviously still have their place in clinical practice. However, many physicians certified in Acupuncture and licensed Acupuncturists are employing electronic and laser stimulation to the Acupoint with equal effectiveness as the needle. Both of these procedures are painless and are quickly becoming a standard worldwide.The tapping needle “teishein” is not really a needle as it does not pierce the skin. It produces a mild to moderate sensation. Compare it to tapping a ball point pen on the skin. This form of stimulation has been used successfully for centuries. Thumb pressure is equally impressive and not considered painful.`,
  },
  {
    title: "How many treatments are usual?",
    text: `Obviously the number of treatments varies with different conditions and individuals. Chronic problems generally require more treatment than acute ones. Some patients notice an immediate improvement after the first treatment, whereas others may not notice any effect until the seventh or eight visits. It has been shown that a certain percentage of patients receive maximum benefit up to three months following a course of therapy.A small number of patients will experience a worsening of symptoms, as the body”s energies are returning to normal. This is usual and no need for alarm. It is followed by improvement. Researchers internationally agree the usual number of treatments is between eight and sixteen. The usual frequency between visits is between two to four times a week.Patients are urged not to enter an Acupuncture program with the thought of “taking a few” to see what will happen. Even though it is possible to achieve success; coming to all your visits would have a better chance of success. Patients are encouraged to be patient with the healing process. If the treatments are recommended and results occur in just five visits, the doctor may elect to discontinue treatments or continue their use to stabilize the condition.`,
  },
  {
    title: "Are results psychological?",
    text: `Many critics of Acupuncture have suggested that the science is hypnosis or “mind or matter”. This criticism is totally unfounded as Acupuncture has startling effects in infants and toddlers as well as veterinary applications. The effect it has in surgery as an anesthetic further disclaims the skeptics. Even total disbelievers report favorable response to Acupuncture.However, a positive outlook is obviously beneficial in all phases of life including the healing process.`,
  },
  {
    title: "What conditions are accepted?",
    text: `Acupuncture textbooks list well over one hundred different conditions that respond well to Acupuncture. The World Health Organization, working in close harmony with the International Acupuncture training center of the Shanghai College of Traditional Chinese Medicine, has indicated Acupuncture is effective in the following conditions: Acute and Chronic pain relief, migraine, tension cluster and sinus headaches, trigeminal neuralgia, bladder dysfunction, bed wetting, cervical (neck) pain, mid-back pain, low shoulder, tennis elbow, post-operative pain relief, gastric problems, asthma, allergies, skin conditions, abnormal blood pressure, fatigue, anxiety, neurologic syndrome, various eye problems, knee pain, etc., etc..This is only a partial list of the numerous conditions Acupuncture has been credited with helping.`,
  },
  {
    title: "Is Acupuncture expensive?",
    text: `The cost of Acupuncture treatments varies in different parts of the country. However, the average appears to be between $50.00 and $85.00 per treatment.`,
  },
  {
    title: "Are the results permanent?",
    text: `For acute problems where there has been little or no organ system or tissue damage, results are often permanent. For chronic conditions, symptoms may recur from time to time. Generally a few additional treatments are sufficient to obtain relief. It”s suggested that patients with severe or chronic conditions return for a booster treatment two to three times a year.`,
  },
  {
    title: "What's included in the treatment?",
    text: `Perhaps the cornerstone of an Acupuncture examination is pulse diagnosis whereby the trained practitioner, by feeling the pulse, is able to determine the balance of the twelve (12) meridians. This ancient method of diagnosis is giving way to modern electronic evaluation referred to as “Ryodoraku” or “electro meridian imaging” (EMI). The doctor places a small painless electronic pen on the skin over specific Acupoints. By way of a sensitive metering device, the electro potential of the point is measured. This exam is extremely reliable and is quickly becoming the standard method of diagnosis internationally.Many physicians utilize applied kinesiology, which is an examination involving testing certain muscles and correlating then to the associated meridian. Case history and consultation play a vital role in determining what is abnormal as does simple palpation over specific body parts.`,
  },
  {
    title: "What is ear acupuncture?",
    text: `On the ear there are more than one hundred Acupoints which relate to various organ systems and parts of the body. During fetal development, the first structure to form is the brain and spinal cord. At about the same time, what later becomes the external ear also develops. Accordingly, there is a very strong relationship between the external ear and the central nervous system.The Ancient Chinese viewed the ear as resembling an upside down fetus with all the body parts proportionately arranged in and on the ear. Therefore, the lobe of the ear would relate to the head, brain, stem, face, etc. whereas the top of the ear relates to the knee, foot, ankle, etc. The success rate in Ear Acupuncture is remarkable. Thousands of American physicians have begun using Ear Acupuncture as an adjunct to their practice.`,
  },
  {
    title: "What is hand and cervical acupuncture?",
    text: `Throughout the body there are a number of Acupoints which have a particular effect. This is of particular significance on the hand and scalp. Cerebral Acupuncture consists of a number of zones which are primarily use for serious neurologic conditions, whereas hand Acupoints are used for a variety of common conditions. By stimulating specific hand points, headache, sore throat, neck and shoulder pain, even toothache may be successfully treated.`,
  },
]);

onMounted(() => {
  current.current = "Acupuncture";
});

const redirect = (location) => {
  window.open(location);
};
</script>