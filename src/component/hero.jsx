import HeroIntro from "./heroIntro";
import HeroImage from "./heroImage";
function Hero(){
    return(
        <>
        <section class="hero" id="hero">
            <HeroIntro />
            <HeroImage />
        </section>
        </>
    );

}
export default Hero;