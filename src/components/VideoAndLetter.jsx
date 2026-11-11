import { motion } from 'framer-motion'

// -----------------------------------------------------------------------
// VideoAndLetter.jsx  (Reference: Image 2 / Image 3)
//
// Dark mauve background with floral borders. Contains:
//   1. A responsive HTML5 <video> player up top.
//   2. A vintage-styled letter below, with a lace border image and a
//      cream paper background, holding the heartfelt message.
// A small "continue" button/arrow at the bottom advances to step 4
// (PhotoCollage).
//
// ASSET SLOTS:
//   /assets/floral-border-left.png   - vertical floral illustration, left edge
//   /assets/floral-border-right.png  - vertical floral illustration, right edge
//   /videos/girlfriend-day.mp4       - your video file (EDIT the <source> src)
//   /assets/video-poster.jpg         - poster/thumbnail shown before playback
//   /assets/lace-border.png          - the ornate vintage lace frame graphic
// -----------------------------------------------------------------------

export default function VideoAndLetter({ onContinue }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-mauve px-4 py-14 sm:px-8">
      {/* Floral borders */}
      <img
        src="/assets/floral-border-left.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-12 object-cover object-left opacity-90 sm:w-24 md:w-32"
      />
      <img
        src="/assets/floral-border-right.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-12 object-cover object-right opacity-90 sm:w-24 md:w-32"
      />

      {/* "I LOVE U" pill label, matches the visual rhythm of step 2 */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-8 rounded-full bg-mauve-dark px-8 py-2 font-serif text-sm uppercase tracking-widest text-cream shadow-md"
      >
        I love u
      </motion.div>

      {/* ---------------- Video player ---------------- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-lg shadow-2xl"
      >
        {/* EDIT: point src at your own video file in /public/videos/ */}
        <video
          className="aspect-[9/16] w-full bg-black object-cover"
          controls
          playsInline
          poster="/assets/video-poster.jpg"
        >
          <source src="/videos/girlfriend-day.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* ---------------- The letter ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="relative z-10 mt-10 w-full max-w-md"
      >
        <div className="relative rounded-md p-3">
          {/* Lace border frame, sits behind the cream paper.
              EDIT: replace with your own transparent lace PNG */}
          <img
            src="/assets/lace-border.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-fill opacity-95"
          />

          <div className="relative z-10 mx-auto max-w-sm bg-cream/95 px-6 py-10 text-center shadow-inner sm:px-10">
            <p className="font-letter text-lg text-mauve-dark sm:text-xl">
              To my favorite person,
            </p>

            <p className="mt-6 font-letter text-base leading-relaxed text-mauve-dark sm:text-lg">
              {/* EDIT: personalize this message however you like */}
              عايز أقولك إن مهما اتكلمت ومهما حاولت أوصفلك إنتي بالنسبالي إيه، مش هعرف أوفيكي حقك بالكلام، لأن اللي جوايا أكبر بكتير من أي كلام ممكن يتقال. أنا بجد بحبك حب مش عادي، بحب وجودك في حياتي، وبحب تفاصيلك الصغيرة قبل الكبيرة، بحب صوتك وضحكتك وكلامك وطريقتك، وحتى الحاجات اللي إنتي ممكن تشوفيها عادية أنا بشوفها أحلى حاجة في الدنيا.

              إنتي مش مجرد حبيبتي، إنتي بقيتي جزء كبير من يومي ومن تفكيري ومن كل حاجة بعملها. بقيت أحب أحكيلك كل حاجة بتحصل معايا، وأول ما يحصل معايا حاجة حلوة ببقى عايز أشاركك بيها، ولما أكون مضايق ببقى محتاج أسمع صوتك وأتكلم معاكي، لأن وجودك لوحده بيخليني أحس إن الدنيا لسه بخير.

              أنا عايزك دايماً تبقي عارفة إنك غالية عندي أوي، وإن مفيش حاجة ممكن تقلل من مكانتك جوايا. حتى لو اختلفنا، حتى لو زعلنا من بعض، حتى لو الدنيا ضغطت علينا، أنا مش عايز في يوم تحسي إنك لوحدك أو إنك مش مهمة عندي. بالعكس، أنا عايز أفضل الشخص اللي تطمني معاه، واللي تعرفي إنك مهما تعبتي أو اتضايقتي هتلاقيه جنبك وبيحاول يعمل كل اللي يقدر عليه عشان يشوفك مبسوطة.

              أنا مش عايز منك تكوني مثالية، ولا عايزك تغيري من نفسك عشاني، أنا بحبك إنتي زي ما إنتي، بعيوبك ومميزاتك، بعصبيتك وهدوءك، بضحكتك وزعلك، بكل تفاصيلك اللي بتخليكي إنتي ومحدش غيرك.

              نفسي أفضل أشوف ضحكتك، وأكون سبب في سعادتك، وأشاركك كل لحظة حلوة في حياتك، ونعدي مع بعض على كل الظروف الصعبة وإيدينا في إيد بعض. نفسي نفضل نحكي لبعض عن أحلامنا ونحققها سوا، ونفتكر بعد سنين كل اللحظات اللي عشناها ونضحك عليها.

              وعايزك تعرفي إن أنا مش بحبك بس في الأيام الحلوة، أنا عايزك في كل حالاتك، في وقت فرحتك ووقت حزنك، في وقت قوتك ووقت ضعفك، لما تكوني مبسوطة ولما تكوني مش طايقة الدنيا. أنا عايز أكون جنبك في كل الأوقات، مش مجرد شخص موجود وقت ما كل حاجة تكون كويسة.

              يمكن مش بعرف كل مرة أعبّر عن اللي جوايا، ويمكن ساعات كلامي أو تصرفاتي متوصلش ليكي قد إيه أنا بحبك، بس صدقيني إنتي في قلبي ليكي مكانة محدش يقدر ياخدها. وأنا كل اللي بتمناه إنك تكوني مبسوطة ومطمنة وحاسة إنك متحابة بجد.

              شكراً إنك في حياتي، شكراً على كل لحظة حلوة، وعلى كل ضحكة، وعلى كل مرة خليتيني أحس إن وجودك فرق معايا. أنا محظوظ بيكي، ومحظوظ إن عندي إنسانة زيك أحبها وأهتم بيها وأفكر في مستقبل يجمعنا.

              بحبك يا حبيبتي، وبحب كل حاجة فيكي، ونفسي مهما عدى وقت ومهما اتغيرت ظروفنا تفضلي عارفة إن في قلب هنا بيحبك بجد، وبيختارك كل يوم، وبيتمنى يفضل معاكي ويشوفك أسعد واحدة في الدنيا
            </p>

            <p className="mt-6 font-letter italic text-base text-mauve-dark sm:text-lg">
              I love you, today and always.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Continue to the photo collage */}
      <motion.button
        type="button"
        onClick={onContinue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        aria-label="See our photos"
        className="relative z-10 mt-10 rounded-full bg-mauve-dark px-8 py-3 font-serif text-sm uppercase tracking-widest text-cream shadow-lg"
      >
        See our photos ↓
      </motion.button>
    </div>
  )
}
