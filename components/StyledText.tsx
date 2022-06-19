import { Text, TextProps } from './Themed';

export function CabinText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'cabin' }]} />;
}
