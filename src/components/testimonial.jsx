function Testimonial({ item }) {

    const {
        nombre,
        cargo,
        texto,
        foto
    } = item;

    return (
        <article className="testimonial-card">

            <img
                src={foto}
                alt={`Fotografía de ${nombre}`}
                width="90"
                height="90"
                className="testimonial-image"
            />

            <h2>{nombre}</h2>

            <p className="testimonial-position">
                {cargo}
            </p>

            <blockquote>
                "{texto}"
            </blockquote>

        </article>
    );
}

export default Testimonial;