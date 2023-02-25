import type { Directive, DirectiveBinding } from 'vue';

const pin: Directive = {
    mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
        //是否要定住
        const pinned = binding.value;
        //传入的修饰符，表示定在哪里
        const position = binding.modifiers;
        // 传递给指令的参数，可以表示定在的重要度
        if (pinned) {
            el.style.position = 'fixed';
            for (const val in position) {
                if (position[val]) {
                    el.style[val as 'top' | 'bottom' | 'left' | 'right'] =
                        '10px';
                }
            }
        } else {
            el.style.position = 'static';
            el.style.backgroundColor = '';
        }
    },
};
export default pin;
