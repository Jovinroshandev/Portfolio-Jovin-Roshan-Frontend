import GradientText from "../GradiText"

const SocialMediaBtn = (props) => {
    return (
        <GradientText colors={["#FED402", "#E2EAF4", "#FED402", "#E2EAF4", "#FED402"]}
            animationSpeed={3}
            showBorder={true}
            className="custom-className">
            <a href={props.link} target="_blank" className="px-2 rounded-full">{props.btnStyle}</a>
        </GradientText>
    )
}

export default SocialMediaBtn;