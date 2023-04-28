import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";


export interface Video {
  imgsrc: string;
  clip: string;
}

export interface Sociallink {
  icon: string;
}

export interface IHeroAPI {
  title: string;
  subtitle: string;
  img: string;
  btntext: string;
  videos: Video[];
  sociallinks: Sociallink[];
}

export interface Item1 {
  ifExists: boolean;
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
}

export interface Item5 {
  id: string;
  title: string;
  text: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
}

export interface IPopularSales {
  ifExists: boolean
  title: string;
  items: Item1[];
}

export interface IHiglight {
  ifExists: boolean;
  heading: string;
  title: string;
  text: string;
  btn: string;
  url: string;
  img: string;
}
export interface ISneaker {
  ifExists: boolean;
  heading: string;
  title: string;
  text: string;
  btn: string;
  url: string;
  img: string;
}

export interface Item2 {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
}

export interface ITopRatesSlaes {
  ifExists: boolean
  title: string;
  items: Item2[];
}

export interface News {
  title: string;
  text: string;
  img: string;
  url: string;
  like: string;
  time: string;
  by: string;
  btn: string;
}

export interface IStory {
  title: string;
  news: News[];
}

export interface Titles {
  title: string;
}

export interface IFooterAPI {
  titles: Titles[];
  links: any[][];
}

export interface ICartItems {
  cartQuantity:number
  color:string
  id:string
  img:string
  price:string
  shadow:string
  text: string
  title: string
}

const heroapi = {
  title: "Jogue com o Nike elétrico",
  subtitle: "Tênis Adaptar 2.0",
  img: heroimg,
  btntext: "Explorar produto",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};
export default heroapi
const popularsales = {
  ifExists: true,
  title: "Vendas Populares",
  items: [
    {
      id: "0p0x1",
      title: "Nike Adapt BB 2.0",
      text: "tênis de corrida masculino",
      rating: "4.9",
      btn: "Comprar agora",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rosa",
      text: "tênis de corrida masculino",
      rating: "4.5",
      btn: "Comprar agora",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Tênis Nike Inteligente 2.0",
      text: "tênis de corrida masculino",
      rating: "5+",
      btn: "Comprar agora",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  ifExists: true,
  heading: "Destaques",
  title: "NIKE AIR COM ESCOLHAS SEM LIMITES",
  text: "Nosso propósito é fazer o mundo avançar. Agimos construindo comunidades, protegendo nosso planeta e aumentando o acesso ao esporte.",
  btn: "Explore mais",
  url: "/",
  img: hightlightimg,
};

const sneaker = {
  ifExists: false,
  heading: "Apresentou",
  title: "SAPATOS NIKE SNEAKERS AIR LANCING",
  text: "O brilho vive no Tênis Nike Sneakers Air Lancing, a bola de basquete OG que dá um novo toque ao que você conhece melhor: sobreposições costuradas duráveis, acabamentos limpos e a quantidade perfeita de brilho para fazer você brilhar.",
  btn: "Explore mais",
  url: "/",
  img: sneakershoe,
};

const toprateslaes = {
  ifExists: false,
  title: "Vendas mais bem avaliadas",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "tênis de corrida masculino",
      rating: "5+",
      btn: "Comprar agora",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "tênis de corrida masculino",
      rating: "5+",
      btn: "Comprar agora",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "tênis de corrida masculino",
      rating: "5+",
      btn: "Comprar agora",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "tênis de corrida masculino",
      rating: "5+",
      btn: "Comprar agora",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "tênis de corrida masculino",
      rating: "5+",
      btn: "Comprar agora",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "tênis de corrida masculino",
      rating: "5+",
      btn: "Comprar agora",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "tênis de corrida masculino",
      rating: "5+",
      btn: "Comprar agora",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "tênis de corrida masculino",
      rating: "5+",
      btn: "Comprar agora",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "tênis de corrida masculino",
      rating: "5+",
      btn: "Comprar agora",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "Tênis de Corrida HOMEM",
      rating: "5+",
      btn: "Comprar agora",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "Tênis de Corrida HOMEM",
      rating: "5+",
      btn: "Comprar agora",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "Tênis de Corrida HOMEM",
      rating: "5+",
      btn: "Comprar agora",
      img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "Estreia de Jayson Tatum",
      text: "Modelo de assinatura da Jordan Brand nos últimos anos, Jayson Tatum estará amanhecendo o Air Jordan 37 nesta temporada antes de obter potencialmente seu primeiro tênis de assinatura com Jumpman, que ele disse estar em obras recentemente através de seu Twitter.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
      url: "/",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "consulte Mais informação"
    },
    {
      title: "Bro’s Nike Zoom Freak 4",
      text: "Chegando na hora certa para o outono, esta próxima versão do Zoom Freak 4 aparentemente se inspira no Dia de Ação de Graças. Laranja e marrom, dois grampos do feriado, são usados ​​em todo o cabedal, vestindo as partes não banhadas em tons de cinza.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      time: "41 Mins",
      like: "5/5",
      url: "/",
      by: "Michael Le",
      btn: "consulte Mais informação"
    },
    {
      title: "Nike Air Max Plus",
      text: "O Nike Air Max Plus teve a revelação de várias cores nos últimos meses. E ao embarcarmos oficialmente na temporada de outono, um conjunto adicional foi adicionado ao calendário, incluindo esta recém-revelada colorway cinza e laranja.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
      time: "2 Hours",
      url: "/",
      like: "5/5",
      by: "Michael Le",
      btn: "consulte Mais informação"
    },
    {
      title: "Air Jordan Retro High OG",
      text: "Air Jordan Retro High OG popular série de AJ1s com o popular bloqueio de cores com o sabor original Yellow Toe. O colorway foi revelado de volta ao PE pelo músico Zach Myers, quase quatro anos depois, os fanáticos da Jordan finalmente terão sua chance de lançar o GR.",
      img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
      time: "7 Months",
      url: "/",
      like: "5/5",
      by: "Sneaker News",
      btn: "consulte Mais informação"
    },
    {
      title: "Nike Air Zoom GT Cut 2",
      text: "uma colorway Bred do Zoom GT Cut 2 será a primeira a ser lançada nesta sexta-feira, para os membros da Nike Nation World Wide, enquanto a colorway Sabrina Ionescus está marcada para 13 de outubro. Enquanto isso, aproveite as imagens oficiais de ambas as cores abaixo.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
      time: "1 Months",
      url: "/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "consulte Mais informação"
    },
    {
      title: "Puma Announces Breanna",
      text: "Pela primeira vez em mais de uma década, uma silhueta de basquete exclusiva está sendo feita para uma das melhores e mais brilhantes estrelas da WNBA, a medalhista de ouro olímpica e superestrela do Seattle Storm, Breanna Stewart. Puma Stewie 1 Quiet Fire estará disponível nesta sexta-feira.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
      time: "25 Days",
      url: "/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "consulte Mais informação"
    },
    {
      title: "Nike Air Force Orange Color",
      text: "De alternâncias de renda a reformas inspiradas na cidade, o Nike Air Force 1 apresentou uma série de modificações exclusivas. Aqui, porém, a marca está reduzindo algumas coisas, optando por uma colorway simples comandada principalmente por preto e laranja laser.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
      url: "/",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "consulte Mais informação"
    },
    {
      title: "Hello Kitty and Adidas",
      text: "O mundo da Sanrio é vasto e repleto de muitos personagens icônicos. Poucos na família, no entanto, rivalizam com a imensa influência de Hello Kitty, que já foi mascote de tudo, desde mercadorias da Pringles até colaborações de tênis.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
      url: "/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "consulte Mais informação"
    },
    {
      title: "Air Force 1 Low Expands",
      text: "A estética noturna vista aqui é aplicada aos painéis de couro preto caídos da parte superior e construção de malha perfurada da língua, enquanto o acabamento real e os Swooshes do antepé fornecem intriga adicional à paleta escura.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
      url: "/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "consulte Mais informação"
    },
  ],
};


const footerAPI = {
  titles: [{ title: "About Nike" }, { title: "Get Help" }, { title: "Company" }],
  links: [
    [
      { link: "Notícias" },
      { link: "Carreiras" },
      { link: "investidores" },
      { link: "propor" },
      { link: "Sustentabilidade" },
    ],
    [
      { link: "Status do pedido" },
      { link: "Envio e Entrega" },
      { link: "Opções de pagamento" },
      { link: "Saldo do vale-presente" },
      { link: "Contate-nos" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Cartões de presente" },
      { link: "Promoções" },
      { link: "Encontre uma loja" },
      { link: "Inscrever-se" },
      { link: "Diário da Nike" },
      { link: "Envie-nos um feedback" },
    ],
  ]
};


export { footerAPI, story, sneaker, highlight, toprateslaes, popularsales };