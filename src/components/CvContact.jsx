function IconText({ iconName, containerClass, iconText, iconTextClass }) {
  return (
    <div className={containerClass}>
      <span class="material-symbols-outlined">{iconName}</span>
      <span class={iconTextClass}>{iconText}</span>
    </div>
  );
}

export default function CvContact() {
  return (
    <>
      <IconText
        iconName={"mail"}
        containerClass={"contactContainer"}
        iconText={"mustafaexample@mail.com"}
        iconTextClass={"iconText"}
      />
      <IconText
        iconName={"smartphone"}
        containerClass={"contactContainer"}
        iconText={"0486 93 41 32"}
        iconTextClass={"iconText"}
      />
      <IconText
        iconName={"location_on"}
        containerClass={"contactContainer"}
        iconText={"Belgium, Brussels"}
        iconTextClass={"iconText"}
      />
      <IconText
        iconName={"link"}
        containerClass={"contactContainer"}
        iconText={"https://linkedin/mustafaozkara.com"}
        iconTextClass={"iconText"}
      />
    </>
  );
}
