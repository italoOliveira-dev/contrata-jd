/* eslint-disable react/prop-types */
export default function Item({id, titulo, quantidade, informacao}) {

    const textColor = id === 2 ? "text-[#3786F1]" : id === 3 ? "text-[#EE61CF]" : "text-[#FF5151]";

    return (
        <>
            <h3 className="text-[18px] font-medium text-[#161E54]">
                {titulo}
            </h3>
            <span className={`text-[34px] font-medium text-[#161E54]`}>{quantidade}</span>
            <span className={`text-[16px] font-normal ${textColor}`}>
                {informacao}
            </span>
        </>
    );
}