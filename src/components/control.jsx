function Controls({
    onPrev,
    onNext,
    onRandom
}) {

    return (
        <div className="controls">

            <button onClick={onPrev}>
                Anterior
            </button>

            <button onClick={onRandom}>
                Aleatorio
            </button>

            <button onClick={onNext}>
                Siguiente
            </button>

        </div>
    );
}

export default Controls;