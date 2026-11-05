function Controls({
    onPrev,
    onNext,
    onRandom
}) {

    return (
        <div className="controls">

            <button type="button" onClick={onPrev}>
                Anterior
            </button>

            <button type="button" onClick={onRandom}>
                Aleatorio
            </button>

            <button type="button" onClick={onNext}>
                Siguiente
            </button>

        </div>
    );
}

export default Controls;