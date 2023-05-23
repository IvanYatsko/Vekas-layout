const LIST = [
    {
        value: 'Satisfied customers',
        quantity: 100
    },
    {
        value: 'Industries',
        quantity: 10
    },
    {
        value: 'Production lines',
        quantity: 500
    },
    {
        value: 'Cities',
        quantity: 90
    }
]

const PositivePoints = () => {
    return <div className="wrapper flex justify-between pt-[150px]">
        {LIST.map((item) => 
            <div key={item.value} className="flex flex-col items-center">
                <p className="text-[50px] font-normal">{item.quantity}+</p>
                <p className="text-3xl text-green font-medium">{item.value}</p>
            </div>
        )}
    </div>
}

export default PositivePoints;