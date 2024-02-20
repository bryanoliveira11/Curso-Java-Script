/* type assertions  */

/* condictional */
const body1 = document.querySelector('body');

/* body could be a HTMLBodyElement or null */
if (body1) body1.style.background = 'red';

/*
 non-null assertion using (!)
 body2 will be HTMLBodyElement only
 */
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

/* type assertion - as type */
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';
