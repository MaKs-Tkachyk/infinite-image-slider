import Slider from 'infinite-image-slider';
import pictures from './constants';
import { SliderWrapper, Image } from './styles/App.styles';
import { ReactComponent as LeftArrow } from './assets/arrow-left.svg';
import { ReactComponent as RightArrow } from './assets/arrow-right.svg';
import { Diamond, Circle } from './customDots';
import './styles/normalize.scss';

const App = () => {
  const configSettings = [
    { maxWidth: 2200, slidesNumber: 3, spaceBetween: 5 },
    { maxWidth: 1400, slidesNumber: 2, spaceBetween: 4 },
    { maxWidth: 900, slidesNumber: 1, spaceBetween: 2 },
  ];
  return (
    <SliderWrapper>
      <Slider
        showDots
        prevButton={<LeftArrow />}
        nextButton={<RightArrow />}
        config={configSettings}
        customDot={<Circle />}
        customActiveDot={<Diamond />}
      >
        {pictures.map((picture) => (
          <Image key={picture.id} src={picture.src} alt={picture.alt} />
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default App;
