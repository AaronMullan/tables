/** @jsx jsx */
import { jsx } from 'theme-ui';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
// import { options } from ‘./richTextOptions’;
import { Fragment } from 'react';

type RichTextProps = {
  richTextObject: any;
};

const RichText: React.FC<RichTextProps> = ({ richTextObject }) => {
  if (!richTextObject || typeof richTextObject !== 'object') return null;
  return <Fragment>{renderRichText(richTextObject)}</Fragment>;
};

export default RichText;
