import ReactSelect from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const Select = () => {
  return (
    <ReactSelect
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: '56px',
          background: state.isFocused ? '#1F2128' : 'rgba(228, 228, 228, 0.1)',
          width: 235,
          borderRadius: 16,
          border: state.isFocused ? '1px solid #3F8CFF' : 'none',
          paddingLeft: '23px',
        }),
        placeholder: (baseStyles, state) => ({
          ...baseStyles,
          fontSize: '14px',
          lineHeight: '20px',
          color: state.isFocused ? 'white' : '#808191',
        }),
        indicatorSeparator: (baseStyles) => ({
          ...baseStyles,
          display: 'none',
        }),
        indicatorsContainer: (baseStyles) => ({
          ...baseStyles,
          color: 'white',
          paddingRight: '25px',
        }),
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          color: 'white',
          transform: state.isFocused ? 'rotateX(180deg)' : 'none',
        }),
        menu: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: '#1F2128',
          border: '1px solid rgba(240, 243, 246, 0.1);',
          padding: '36px 32px',
          borderRadius: '24px',
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          color: state.isSelected ? 'white' : 'white',
          backgroundColor: state.isSelected ? 'transparent' : 'transparent',
          cursor: 'pointer',
          '&:not(:last-of-type)': {
            marginBottom: 24,
          },
        }),
      }}
      placeholder="Popular"
      options={options}
    />
  )
}

export default Select
