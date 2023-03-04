export function FeatureCards({ title, description, classN }) {
  return (
    <div className={{ classN } ? classN : "col-auto"}>
      <div>
        <span className="subtitle text-uppercase title-card-feature">
          {title ? title : "Title"}
        </span>
        <p className="text-secondary">
          {description
            ? description
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        </p>
      </div>
    </div>
  );
}

export const TitleCards = ({ titleSection, msg1, msg2, msg3, subtitle }) => {
  return (
    <div>
      <span className="subtitle text-uppercase fw-lighter titleSection-titleCard">
        {titleSection}
      </span>
      <h2 className="h2-titleCard">
        {msg1}
        <br />
        {msg2}
        <br />
        {msg3}
      </h2>
      <span className="subtitle fw-lighter">{subtitle}</span>
    </div>
  );
};
