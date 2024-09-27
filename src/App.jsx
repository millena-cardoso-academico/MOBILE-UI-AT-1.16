import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import SellerInfo from './components/SellerInfo';
import UserComments from './components/UserComments';
import UserQuestions from './components/UserQuestions';
import RelatedProducts from './components/RelatedProducts';
import './App.css';

function App() {
  const product = {
    name: 'Tenis Nike Dunk Low Panda - 38 BR',
    images: [
      'https://i.imgur.com/I47oOdo.jpeg',
      'https://i.imgur.com/qENdXOS.jpeg',
      'https://i.imgur.com/BEJmAAa.jpeg',
    ],
    description: 'Criado para as quadras mas adorado nas ruas, o Nike Dunk Low Retro retorna com sobreposições viçosas e cores originais do time. Este ícone do basquete canaliza a vibe dos anos 80 com um couro premium e elegante na parte de cima que envelhece com estilo. A tecnologia moderna de calçados permite trazer o conforto para o século XXI.',
    price: 1299.90,
    rating: 4.5,
  };

  const seller = {
    name: 'Nathan dos esquemas',
    email: 'nathan@example.com',
    phone: '(11) 98765-4321',
    rating: 4.9,
  };

  const comments = [
    {
      user: 'juninho_das_escadas065',
      date: '01-10-2023',
      message: 'Ótimo produto, nota dó',
      rating: 1.2,
    },
    {
      user: 'furebizz',
      date: '02-09-2024',
      message: 'Em toda minha existencia nunca tive uma entrega tão bem feita.',
      rating: 4,
    },
    {
      user: 'julin_esquematico',
      date: '02-09-2022',
      message: 'Esse cara vende produtos de origem suspeita, porem muito bons.',
      rating: 5,
    },
  ];

  const questions = [
    {
      user: 'antonella_alburquerte',
      date: '02-03-2024',
      question: 'Este produto é original ?',
      answer: 'Sim, comprei diretamente com o Lebron James.',
    },
    {
      user: 'zatanna@du@corte',
      date: '05-02-1917',
      question: 'Esse tênis serve para a guerra ?',
      answer: 'Sim, otimo para corridas.',
    },
  ];

  const relatedProducts = [
    {
      name: 'Tênis Nike Air Jordan 1 High Travis Escorte',
      image: 'https://i.imgur.com/o3eiJC6.jpeg',
      price: 12990.90,
    },
    {
      name: 'Tênis da coroação do presidente dos EUA - edição limitada',
      image: 'https://i.imgur.com/uvEpx7K.jpeg',
      price: 14920.99,
    },
    {
      name: 'Tênis com LED da nike - edição handmade',
      image: 'https://i.imgur.com/3T0mdEw.jpeg',
      price: 879.99,
    },
    {
      name: 'Vans de donuts - pode comer',
      image: 'https://i.imgur.com/S6mPWdh.jpeg',
      price: 699.99,
    },
    {
      name: 'O tenis mais forte do mundo',
      image: 'https://i.imgur.com/K4ailXO.jpeg',
      price: 59.99,
    }
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <ProductDetails product={product} />
        <SellerInfo seller={seller} />
        <UserComments comments={comments} />
        <UserQuestions questions={questions} />
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
}

export default App;
