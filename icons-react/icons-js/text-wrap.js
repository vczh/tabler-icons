import * as React from "react";

const IconTextWrap = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-text-wrap" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={6} x2={20} y2={6} /><line x1={4} y1={18} x2={9} y2={18} /><path d="M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2" /></svg>;

export default IconTextWrap;