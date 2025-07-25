import { Link } from "react-router-dom";

const Repentance = () => {
  const loveText = `я вот пишу это сообщение тебе сонечка...знаешь не описать словами как я тебя люблю и обожаю, любую тебя, всю всю всю,и я благодарна судьбе что ты у меня есть, спасибо тебе ♡

прости меня за все моменты когда моя любовь превращается в какой то ураган или бурю и я тебя обижаю,мне очень жаль любимая. не оправдываю своё поведение, просто хочу исправиться, хочу порадовать тебя, хочу забрать всю твою грусть и печаль, все плохое и просто унести прочь от тебя, а принести только тепло и радость, счастье ♡

ты для меня кислород, знаешь волшебница что превращает мои ошибки в уроки, мой эгоизм в желание стать лучше, мои тревоги в ничто. я так рада что ты у меня есть, я тебя люблб сонечка. даже если ты раздражаешься я все равно люблю тебя ни меньше прежнего, я люблю тебя любой и моя любовь к тебе растет с каждым днём, с каждой минутой и секундой. знаю как ты винишь себя за эту свою злость, просто хочу сказать что все нормально,что партнёр может раздражать, ведь мы вместе почти год, в долгосрочных отношениях это нормально ♡

я учусь видеть твое раздражение просто как дождик, который стучит по крыше, капает на траву и почву,но после он проходит, и после него расцветают удобренные его водой цветочки. ты учишь меня и научила многому. я тебя очень сильно люблю дорогая

ты уникальна, ты особенна, не просто любимая, а та ради кого я просыпаюсь по утрам и жду сообщений скорее, ты с кем мне комфортно просто даже молчать, с кем мне весело и интересно, ты та кто любит меня, та кто дарит мне тепло, ты та с кем просто самый худший день становится лучшим, ведь с тобой все становится таким. таким хорошим и очаровательным как и ты сама.

ты моя вселенная и это факт. без тебя звёзды это просто точки в небе, и ничего особенного, даже мои любимые сладости теряют вкус без тебя. вся жизнь краски теряет если в ней нету тебя.

я не сдвинусь, не отстану от тебя, буду здесь. знаю в тебе сидит обида как заноза, и я ее вытащу. все будет хорошо милая. я знаю это, не потому что наивна, а потому что я в этом уверенна, потому что я вижу: наши ссоры это двери которые мы учимся открыаать друг другу, учимся понимать друг друга,

я тебя люблю и обожаю мое солнышко, помни я рядом, укрываю тебя от всех бед ♡

знай мои двери к тебе всегда открыты, руки протянуты к тебе, я вся твоя и только твоя, а ты моя, моя улыбка уже ждёт твоей, и сердце кричит о моей любви к тебе и что все будет хорошо милая. обнимаю тебя и глажу глажу сонечка моя, целую тебя нежно при нежно любимка ♡

ты мое счастье, моя радость, моя любовь, мой смысл,,

ты та кого я люблю всем своим сердцем так сильно и так нежно, я позабочусь о тебе сонечка, не переживай, я рядом, я здесь, я тут

очень сильно скучаю и тоскую по тебе,

ты самая лучшая

обнимаю!!!!!! ♡`;

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/e8105ecd-504c-4d78-ada3-baa0ccd5c698.jpg')`
      }}
    >
      {/* Blur overlay to make text readable */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      
      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-20 text-white/80 hover:text-white transition-colors text-sm bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm"
      >
        ← назад
      </Link>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-3xl">
          {/* Love letter text */}
          <div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 animate-fade-in"
          >
            <div 
              className="text-white leading-relaxed text-sm md:text-base max-h-[60vh] overflow-y-auto custom-scrollbar"
              style={{ 
                fontFamily: 'Cormorant, serif',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                lineHeight: '1.8'
              }}
            >
              {loveText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .delay-300 {
          animation-delay: 300ms;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Repentance;