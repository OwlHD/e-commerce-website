import states from "../../utils/data"

export default function States() {
    return (
        <>
        {states.map((state, index) => {
            return (<option key={`state-${index}`} value={state}>
                {state}
            </option>)
        })}
        </>
    )
}