import {
  SlideContainer,
  HeroSlide,
  AboutSlide,
  ProjectsSlide,
  BlogSlide,
  ContactSlide,
} from '@/components/slides';
import { SlideHeader } from '@/components/navigation/SlideHeader';

export default function Home() {
  return (
    <>
      <SlideHeader />
      <SlideContainer>
        <HeroSlide />
        <AboutSlide />
        <ProjectsSlide />
        <BlogSlide />
        <ContactSlide />
      </SlideContainer>
    </>
  );
}
