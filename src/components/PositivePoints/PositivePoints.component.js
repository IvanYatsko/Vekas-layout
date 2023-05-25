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
    return <div className="wrapper flex justify-between py-[150px] gap-[30px] flex-wrap">
        {LIST.map((item) => 
            <div key={item.value} className="flex flex-col items-center">
                <p className="text-[50px]">{item.quantity}+</p>
                <p className="lg:text-3xl text-xl max-w-[115px] lg:max-w-none text-green font-medium text-center">{item.value}</p>
            </div>
        )}
    </div>
}

export default PositivePoints;