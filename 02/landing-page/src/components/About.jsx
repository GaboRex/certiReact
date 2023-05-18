import aboutImg from '../images/upb/nosotros.png';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='Nosotros'>
      <Title title='Quienes' subTitle='somos' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>Conocenos!</h3>
          <p>
          La Ingeniería de Sistemas es una disciplina que combina la ciencia de la computación y la ingeniería para diseñar, desarrollar y administrar sistemas de información. Los ingenieros de sistemas aplican principios y metodologías para resolver problemas complejos y mejorar la eficiencia y efectividad de los sistemas informáticos en diversos ámbitos.
          </p>
          <p>
          Si estás buscando una solución tecnológica confiable y efectiva, nuestro equipo de ingenieros de sistemas está listo para ayudarte. Nos apasiona la tecnología y nos comprometemos en brindar resultados excepcionales para hacer crecer tu negocio.
          No dudes en contactarnos para discutir tus proyectos y encontrar la mejor solución tecnológica para ti.
          </p>
          <a href='#' className='btn' style={{ color: 'black' }}>
            mas
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
