// flow

export const head = function(i, s, o, g, r, a, m) {
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.appendChild(s.createTextNode(g.text));
  a.onload = r(g);
  m ? m.parentNode.insertBefore(a, m) : s.head.appendChild(a);
}; // eslint-disable-line
