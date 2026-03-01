import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/Marquee";
import Image from "next/image";

const quotes = [
  {
    name: "Coco Chanel",
    body: "Fashion changes, but style endures.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_chanel.jpg",
  },
  {
    name: "Giorgio Armani",
    body: "The difference between fashion and style is quality.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_armani.jpg",
  },
  {
    name: "Karl Lagerfeld",
    body: "Trendy is the last stage before tacky",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_karl.jpg",
  },
  {
    name: "Miuccia Prada",
    body: "What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_prada.jpg",
  },
  {
    name: "Alexander McQueen",
    body: "think there is beauty in everything. What 'normal' people perceive as ugly, I can usually see something of beauty in it.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_mcqueen.jpg",
  },
  {
    name: "Diane von Furstenberg",
    body: "Style is something each of us already has, all we need to do is find it.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_diane.jpg",
  },
  {
    name: "Ralph Lauren",
    body: "I don't design clothes. I design dreams.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_ralph.jpg",
  },
  {
    name: "Yves Saint Laurent",
    body: "Fashions fade, style is eternal.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_ysl.jpg",
  },
  {
    name: "Elsa Schiaparelli",
    body: "In difficult times, fashion is always outrageous.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_elsa.jpg",
  },
  {
    name: "Vivienne Westwood",
    body: "Fashion is very important. It is life-enhancing and, like everything that gives pleasure, it is worth doing well.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_viviene.jpg",
  },
  {
    name: "Christian Dior",
    body: "You can never take too much care over the choice of your shoes. Too many women think that they are unimportant, but the real proof of an elegant woman is what is on her feet.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_dior.jpg",
  },
  {
    name: "Hubert de Givenchy",
    body: "The dress must follow the body of a woman, not the body following the shape of the dress.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_givenchy.jpg",
  },
  {
    name: "Cristóbal Balenciaga",
    body: "Elegance is elimination.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_balenciaga.jpg",
  },
  {
    name: "Christian Louboutin",
    body: "Shoes transform your body language and attitude. They lift you physically and emotionally.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_louboutin.jpg",
  },
  {
    name: "Alber Elbaz",
    body: "Style is the only thing you can’t buy. It’s not in a shopping bag, a label, or a price tag. It’s something reflected from our soul to the outside world—an emotion.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_alber.jpg",
  },
  {
    name: "Giambattista Valli",
    body: "The hardest thing in fashion is not to be known for a logo, but to be known for a silhouette.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_gaimbattista.jpg",
  },
  {
    name: "Vera Wang",
    body: "I want people to see the dress, but focus on the woman.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_vera.jpg",
  },
  {
    name: "Azzedine Alaïa",
    body: "I make clothes, women make fashion.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_azzedine.jpg",
  },
  {
    name: "Oscar de la Renta",
    body: "Fashion is about dressing according to what’s fashionable. Style is more about being yourself.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_oscar.jpg",
  },
  {
    name: "John Galliano",
    body: "The joy of dressing is an art.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_john.jpg",
  },
  {
    name: "Rihanna",
    body: "The way I dress depends on how I feel. I never have to psych myself up. Usually it just feels like it works.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_rihanna.jpg",
  },
  {
    name: "Angelina Jolie",
    body: "I think we all know boldness when we see it. Nothing makes me smile more than when I see someone being fully themselves, with their own individual style and character, whatever that is.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_angelina.jpg",
  },
  {
    name: "Bill Cunningham",
    body: "Fashion is the armor to survive the reality of everyday life.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_bill.jpg",
  },
  {
    name: "Marc Jacobs",
    body: "I always find beauty in things that are odd and imperfect, they are much more interesting.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_marc.jpg",
  },
  {
    name: "Donatella Versace",
    body: "Fashion is about dreaming and making other people dream.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_donatella.jpg",
  },
  {
    name: "Jean Paul Gaultier",
    body: "It is beautiful to be who you are.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_jean.jpg",
  },
  {
    name: "Stella McCartney",
    body: "Everyone can do simple things to make a difference, and every little bit really does count.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_stella.jpg",
  },
  {
    name: "Tom Ford",
    body: "I am my own muse.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_tom.jpg",
  },
  {
    name: "Jonathan Anderson",
    body: "I’ve realised that when fashion is really good and really challenges and takes a risk, it is incredibly artistically powerful. It makes people dream.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_jonathan.jpg",
  },
  {
    name: "Virgil Abloh",
    body: "People, when they say ‘streetwear,’ they miss the central component, which is that it’s real people; it’s clothes that are worn on the street.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_virgil.jpg",
  },
  {
    name: "Dries Van Noten",
    body: "I make clothes people can wear; I don’t make art.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_dries.jpg",
  },
  {
    name: "Nicolas Ghesquière",
    body: "What I find most interesting in fashion is that it has to reflect our time. You have to witness your own moment.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_nicolas.jpg",
  },
  {
    name: "Sarah Burton",
    body: "I really believe that a woman shouldn’t just have to dress like a man to feel strong.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_sarah.jpg",
  },
  {
    name: "Alessandro Michele",
    body: "I think that fashion, for a long time, has been in a prison. Without freedom. I think that without freedom, with rules, it’s impossible to create a new story.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_alessandro.jpg",
  },
  {
    name: "Maria Grazia Chiuri",
    body: "When you are a woman making clothes for women, then fashion is not just about how you look. It is about how you feel and how you think.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_maria.jpg",
  },
  {
    name: "Riccardo Tisci",
    body: "I was one of the pioneers who brought streetwear into fashion. But, typical of fashion, we went too far and now nobody recognises real design.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_riccardo.jpg",
  },
  {
    name: "Victoria Beckham",
    body: "I like to try things on, because I always say it’s about creating a collection that is elevated enough for the catwalk, but also, you should be able to wear everything. I don’t want to design something just for a show.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_victoria.jpg",
  },
  {
    name: "Manolo Blahnik",
    body: "People walk differently in high heels. Your body sways to a different kind of tempo.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_manolo.jpg",
  },
  {
    name: "Gianni Versace",
    body: "I think it’s the responsibility of a designer to try to break rules and barriers.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_gianni.jpg",
  },
  {
    name: "Roberto Cavalli",
    body: "Sometimes women are afraid to be sexy and women should know that sometimes a dress can change her life.",
    img: "https://ik.imagekit.io/digiv3rse/assets/quotes/quotes_roberto.jpg",
  },
];


const firstRow = quotes.slice(0, quotes.length / 2);
const secondRow = quotes.slice(quotes.length / 2);

const QuoteCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-full w-48 cursor-pointer overflow-hidden rounded-xl border p-4 mx-auto items-center justify-center",
        "border-gray-700 bg-muted hover:bg-gray-950/50",
      )}
    >
      <div className="flex flex-col mx-auto items-center justify-center gap-2">
        <Image className="rounded-lg" width={125} height={125} alt={name} src={img} />
        <div className="grid text-start mt-2 text-center">
          <p className="text-md font-medium text-white">{name}</p>
        </div>
      </div>
      <p className="mt-2 text-sm">&quot;{body}&quot;</p>
    </div>
  );
};

export function MarqueeQuotes() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black">
      <Marquee pauseOnHover className="[--duration:60s]">
        {firstRow.map((quote) => (
          <QuoteCard key={quote.name} {...quote} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:60s]">
        {secondRow.map((quote) => (
          <QuoteCard key={quote.name} {...quote} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}