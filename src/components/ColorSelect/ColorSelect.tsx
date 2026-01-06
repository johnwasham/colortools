import "./ColorSelect.css"

interface ColorSelectProps {
    label: string
    value: number
    onChange: (v: number) => void
}

export default function ColorSelect({ label, value, onChange }: ColorSelectProps) {
    return (
        <div className="colorselect">
            <label>{label} ({value})</label>
            <input type="range" 
                min={0} max={255} 
                value={value}
                onChange={e => {onChange(Number(e.target.value)); }} 
            />
        </div>
    )
}