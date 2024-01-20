import { styled } from "@qinetik/emotion"
import { Anique } from "@qinetik/anique"


const Button = styled.button`
  padding: 0.6em 1.2em;
  background: ${Anique.colors.bg};
  color: ${Anique.colors.onBg};
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 1.4em;
  box-sizing: border-box;
  transition: color 0.3s ease-out, background 0.3s ease-out;

  &:hover {
    color: ${Anique.colors.bg};
    background: ${Anique.colors.onBg};
  }
`

const MyButton = (props) => {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  )
}

export default MyButton
