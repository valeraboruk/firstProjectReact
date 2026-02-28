

export default function SampleBlock({title, description}) {

    return (
        <div className="bg-green-200">
            <h2 className="text-lg">{title}</h2>
            <p className="text-lg">{description}</p>
        </div>
    )
}