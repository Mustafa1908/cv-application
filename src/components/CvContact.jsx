import "../styles/Cv.css";

function IconText({
  iconName,
  iconClass,
  containerClass,
  iconText,
  iconTextClass,
}) {
  return (
    <div className={containerClass}>
      <span class={"material-symbols-outlined " + iconClass}>{iconName}</span>
      <p class={iconTextClass}>{iconText}</p>
    </div>
  );
}

export default function CvContact() {
  return (
    <>
      <IconText
        iconName={"mail"}
        iconClass={"contactIcon"}
        containerClass={"contactContainer"}
        iconText={"mustafaexample@mail.com"}
        iconTextClass={"iconText cvMail"}
      />
      <IconText
        iconName={"smartphone"}
        iconClass={"contactIcon"}
        containerClass={"contactContainer"}
        iconText={"0486 93 41 32"}
        iconTextClass={"iconText cvPhoneNumber"}
      />
      <IconText
        iconName={"location_on"}
        iconClass={"contactIcon"}
        containerClass={"contactContainer"}
        iconText={"Belgium, Brussels"}
        iconTextClass={"iconText cvLocation"}
      />
      <IconText
        iconName={"link"}
        iconClass={"contactIcon"}
        containerClass={"contactContainer"}
        iconText={"https://linkedin/mustafaozkara.com"}
        iconTextClass={"iconText cvWebsite"}
      />
    </>
  );
}
