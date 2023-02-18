<template>
  <v-container fluid class="pa-0">
    <v-row
      v-for="(chiropractor, i) in chiropractors"
      :key="i"
      no-gutters
      :class="i + 1 == chiropractors.length ? 'mb-0' : 'mb-10'"
    >
      <v-col
        cols="12"
        sm="7"
        :order="chiropractor.order == 1 ? 1 : 1"
        :order-md="chiropractor.order == 1 ? 0 : 1"
      >
        <v-card flat color="blue-lighten-4" class="rounded-0 py-16 px-lg-16">
          <v-card-subtitle class="text-body-1 text-grey-darken-3">{{
            chiropractor.subtitle
          }}</v-card-subtitle>
          <v-card-text class="text-grey-darken-3 text-h5 text-sm-h4">
            <span class="font-weight-bold">{{ chiropractor.title }}</span>
          </v-card-text>
          <v-card-text
            v-for="(text, i) in chiropractor.texts"
            :key="i"
            class="text-body-2 text-grey-darken-3"
            >{{ text }}</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12" sm="5" class="bg-red">
        <v-card width="100%" height="100%" class="rounded-0" flat>
          <v-img
            :src="chiropractor.image"
            :lazy-src="chiropractor.lazy"
            cover
            height="100%"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const chiropractors = ref([
  {
    order: 1,
    subtitle: "D.C. CHIROPRACTOR",
    title: "Dr. Dr. Chris Fokumlah",
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675646348/chriopractor/Dr.-Caroline_u5flkd.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    texts: [
      "Dr. Dr. Chris Fokumlah was born in Stockholm, Sweden, but moved to Minnesota with her family when she was four years old. She is the daughter of Dr. Barbro Brost and Dr. Gerald Brost, the founders of Metronet Chiropractic Clinic. Dr. Caroline has lived the chiropractic lifestyle all her life with regular adjustments, organic food, natural supplements and exercise. She is walking proof that natural healthcare works.",
      "She grew up in Medina and went to Orono Schools. She Graduated from Gustavus Adolphus College with a BA in Psychology and went on to complete a four year doctorate in chiropractic at Northwestern Health Sciences University in 2006. She also did parallel studies in Acupuncture and received her acupuncture certification in 2007. Dr. Caroline is certified in the Activator technique, a low force instrument adjustment technique. She is also Webster Certified to help pregnant women through the pregnancy and delivery.",
      "Dr. Dr. Chris Fokumlah treats families and individuals of all ages combining chiropractic, acupuncture and natural supplements for a complete health approach. Her specialties include treating car accident related injuries and her passion is natural healthcare for children. As a mother of three young children, Dr. Caroline understands the importance of receiving chiropractic care throughout pregnancy and loves to treat infants and children of all ages.",
    ],
  },
  {
    order: 0,
    subtitle: "D.C. CCSP - CHIROPRACTOR",
    title: "Dr. Shawn Sailer",
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675656756/chriopractor/Dr.-Shawn_nlivtd.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    texts: [
      "Dr. Shawn Sailer was born in Mandan, North Dakota. His job in operations at an oil refinery brought him to Minnesota in 2000. Soon thereafter, he decided that natural health care was his calling and went back to school to pursue his dream of being a doctor of chiropractic.",
      "Dr. Sailer graduated from Northwestern Health Sciences University in April of 2009 and went on to complete his certification in acupuncture in 2009. He worked with Dr. Jay Greenberg in Redwing, MN before joining Metronet Chiropractic Clinic in April of 2009.",
      "Dr. Sailer works with athletes and people who want to improve their overall health. He specializes in nutrition, weight loss, and sports related injuries. After continued studies, Dr. Sailer achieved status as a Certified Chiropractic Sports Physician (CCSP) with the ACBSP, making him an expert at improving athletic performance, reducing injury, and treating sports injuries. Having three beautiful children, Dr. Sailer promotes the importance of family and child wellness.",
    ],
  },
  {
    order: 1,
    subtitle: "D.C. - CHIROPRACTOR",
    title: "Dr. Ryan Elton",
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675657557/chriopractor/dr-ryan-elton_zlpqgg.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    texts: [
      "A graduate of Gustavus Adolphus College and summa cum laude graduate of Northwestern College of Chiropractic, Dr. Elton came to Metronet Chiropractic Clinic in 1998 as an intern. He showed great promise as a doctor and was hired as an associate after his 1999 graduation as a doctor of chiropractic. In 2005, Dr. Elton received his board certification in acupuncture. In 2014, he became certified as a medical examiner on the Federal Motor Carrier Safety Administration’s National Registry of Certified Medical Examiners., to perform DOT exams.",
      "Although he is in general practice treating all ages and conditions, Dr. Elton sees many athletes who find truth in his claim that chiropractic does more than correct aches and pains; a properly aligned spine enhances sports performance and reduces the risk of injury. A father of three, he also treats many children and young adults.",
      `Known as “The Golf Doctor”, Dr. Elton”s true passion is working with golfers to lower their handicaps. He is a scratch golfer and his college team annually ranked among the nation”s top five. He conducts golf seminars from the perspectives of both a doctor and a golfer, stressing “The most important piece of golf equipment is your body”.`,
    ],
  },
  {
    order: 0,
    subtitle: "D.C, CSCS® - CHIROPRACTOR",
    title: "Dr. Tyler Knutson",
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675658222/chriopractor/Dr.-Tyler-golf-2_ok53bs.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    texts: [
      "Dr. Tyler Knutson was born in Mankato, Minnesota, but relocated with his family to Maple Grove, Minnesota where he grew up. His first encounter with chiropractic was in his senior year of high school when he sustained a back injury while playing varsity football. From that point on, he knew he wanted to be a Doctor of Chiropractic and give the gift of wellness, as he was given.",
      `Dr. Knutson was a multi sport varsity athlete throughout high school but opted to pursue a strong education at the University of Minnesota, rather than continue playing sports at the college level. He graduated with a degree in Kinesiology with a focus on Clinical Sciences in 2014. After graduation he then achieved the status of Certified Strength and Conditioning Specialist (CSCS®) by the National Strength and Conditioning Association. Dr. Knutson then pursued his 4 year graduate degree in chiropractic and obtained his Doctorate of Chiropractic from Northwestern Health Science University in 2017.`,
      `Having suffering multiple injuries himself, Dr. Knutson treats every patient as an individual and takes the time to find the true source of the problem. Although athletes are a specialty of his, Dr. Knutson loves treating both the young and elderly, using the same detailed approach he uses with his athletes.`,
      `Dr. Knutson stays busy outside of work by playing hockey, golfing with friends and colleagues, traveling, and enjoying the great outdoors.`,
    ],
  },
  {
    order: 1,
    subtitle: "D.C. CHIROPRACTOR",
    title: "Dr. Aaron Schulte",
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675658413/chriopractor/Aaron-Schulte_pycndn.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    texts: [
      "Dr. Aaron Schulte graduated with honors from the University of South Dakota.  He then used his passion for natural healthy living as his guiding force to continue his education and enrolled in chiropractic school.  He graduated cum laude from Northwestern College of Chiropractic in November of 2008.",
      `Dr. Schulte spent 11 years practicing at a clinic inside a health club facility before joining Metronet Chiropractic Clinic.  He has vast experience working with athletes ranging from the recreational to the professional level.  He loves working with people of all ages and from all walks of life. Having suffered multiple sports injuries and motor vehicle injuries himself, he understands the importance of finding the root cause of dysfunction as well as appropriate preventative measures when it comes to optimizing overall health and longevity.  His mission as a chiropractor is to keep people doing what they love for as long as they choose to do it.`,
      `Dr. Schulte was born in Omaha, Nebraska before relocating with his family to Sioux Falls, South Dakota.  Both of his parents grew up in a farming community so he considers himself a city boy with country roots and had the importance of hardwork ingrained in him from an early age.  He grew up with a love for sports and played soccer, basketball, and baseball, though baseball was his favorite.  He played 2 years of collegiate baseball followed by 2 summers of amateur baseball in a South Dakota wood bat league.  After hanging up his glove and cleats, his fitness progressed from the field to weight training inside the gym.  His passion for fitness, and some persuasion from his wife, led him to crossfit in 2017.  He has competed at multiple local crossfit competitions since then, several of which ended with him and his teammates standing on top of the podium.`,
      `Dr. Schulte is a husband and father of 3 so he fully comprehends the prioritization involved with balancing family, career, and a healthy living lifestyle.`,
    ],
  },
  {
    order: 0,
    subtitle: "D.C. CHIROPRACTOR",
    title: "Dr. Aarti Goyal",
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675658596/chriopractor/03-1366x2048_rdrb11.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    texts: [
      "Dr. Aarti Goyal was born in Winnipeg, Manitoba, Canada and grew up in Regina, Saskatchewan, Canada. She completed a Bachelor of Kinesiology degree with a focus on Human Kinetics from the University of Regina. Dr. Goyal shadowed multiple health care providers and decided that she wanted to follow a more holistic approach to healthcare. She decided to pursue a career in Chiropractic and moved to Minnesota to attend Northwestern Health Sciences University. Dr. Goyal graduated with a Doctor of Chiropractic degree in 2019 and worked in wellness-based clinics before joining Metronet Chiropractic Clinic in 2021.",
      `Dr. Goyal enjoys working with patients of all ages and strives to help everyone live a happy and healthier lifestyle through chiropractic care. She Board Certified in Acupuncture, and becoming Webster certified to help pregnant women throughout their pregnancy and to support easier and faster deliveries.`,
      `Dr. Goyal takes time to understand the needs of her patients and does everything she can to make sure they are receiving the best care. She especially enjoys helping women and children and can recommend effective, natural, and drug free treatments for many conditions.`,
      `Outside of work, Dr. Goyal likes to spend time with her family and friends, travel, sing, and explore the outdoors.`,
    ],
  },
  {
    order: 1,
    subtitle: "D.C. CHIROPRACTOR",
    title: "Dr. Barbro Brost",
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675658882/chriopractor/Dr.-Brost_sb3jhk.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    texts: [
      "A native of Sweden whose first six years of chiropractic practice took place in Stockholm, Dr. Chris views health care through Europe’s more holistic prism, yet she understands firsthand the toll that American lifestyles exact on our health.",
      `After completing her pre-med studies in Stockholm, Dr. Chris graduated in 1979 from Northwestern College of Chiropractic in Bloomington, Minnesota. She went on to complete a three-year diplomat program in neurology and certification in acupuncture while continually studying clinical nutrition at the postgraduate level.`,
      `She co-founded Metronet Chiropractic Clinic in 1985 and Advanced Back Technology, an adjunct practice that served patients with severe disc problems, in 2002. In 2008, Dr. Chris received the “Alumnus of the Year” Award from Northwestern Health Sciences University. Also in 2008, Metronet Chiropractic Clinic received the Five Star Office Award for offering excellent patient service. Metronet Chiropractic Clinic expanded into a modern 7,400 square foot facility in 2009 and is now one of the largest chiropractic & natural health care clinics in the Midwest. In 2018, Dr. Chris was voted the person of the year by the Wayzata Chamber of Commerce.`,
      `Valued by patients for her nurturing manner and far-reaching competencies, Dr. Chris treats a wide variety of health problems and bodily injuries, often solving complicated riddles that have not responded to other forms of health care. Dr. Chris has selected a team of chiropractors and works closely with them on more complex cases. Everyone on the Brost team works with the philosophy of treating the source of health problems to eliminate the symptoms and fully resolve conditions so patients receive the most optimum outcome. Our goal is to coach each patient to optimum health.`,
    ],
  },
]);
</script>
