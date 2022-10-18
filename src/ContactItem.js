const ContactItem = ({ imgPath, alt, info, link = "" }) => {
  return (
    <div className="contact-item">
      <div className="icon">
        <img src={imgPath} alt={alt}></img>
      </div>
      <div className="contact-info">
        {link.length > 0 ? <a href={link}>{info}</a> : <p>{info}</p>}
      </div>
    </div>
  );
};

export default ContactItem;