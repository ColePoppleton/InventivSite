<template>
  <div class="code-editor">
    <div class="header">
      <div class="title">CSS Editor</div>
    </div>
    <div class="editor-content">
      <p v-if="userInput" class="user-input">{{ userInput }}</p>
      <p>
        <span
          v-for="(part, index) in colorClasses"
          :key="index"
          :class="getPartClass(part)"
        >
          {{ part.value === '{' ? '{' : part.value }}
        </span>
      </p>
      <textarea
        v-model="cssCode"
        @input="updateCss"
        @keyup.enter="applyCss"
        class="property"
      ></textarea>
      <p><span class="delimiter">}</span></p>
    </div>
    <div
      ref="containingDiv"
      class="containing-div"
      :style="{ backgroundColor: computedCss }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cssCode: '',
      colorClasses: [],
      userInput: '',
      computedCss: '',
    };
  },
  methods: {
    updateCss() {
      this.colorClasses = this.parseCss(this.cssCode);
      this.updateContainingDiv();
    },
    applyCss() {
      this.updateContainingDiv();
      this.userInput = this.cssCode;
      this.cssCode = '';
      this.colorClasses = [];
    },
    parseCss(cssCode) {
        const colorClasses = [];
        const tokenize = /(\{|\}|\w+|[:;]|#[a-fA-F0-9]+|\d+|\S[^\S\n]*)/g;
        let match;

        while ((match = tokenize.exec(cssCode)) !== null) {
            const token = match[1];
            colorClasses.push({ value: token });
        }

        // Check for color property and update the containing div color
        const colorProperty = colorClasses.find(
            (part) => part.value === 'color:'
        );
        if (colorProperty) {
            const nextTokenIndex = colorClasses.indexOf(colorProperty) + 1;
            if (nextTokenIndex < colorClasses.length) {
            this.updateContainingDivColor(colorClasses[nextTokenIndex].value);
            }
        }

        return colorClasses;
        },
    updateContainingDivColor(colorValue) {
      // Add additional validation for color value
      this.$refs.containingDiv.style.backgroundColor = colorValue;
    },
    getPartClass(part) {
      if (part.value === '{' || part.value === '}') {
        return 'delimiter';
      } else if (/^\w+$/.test(part.value)) {
        return 'selector';
      } else if (/^[:;]/.test(part.value)) {
        return 'property-delimiter';
      } else if (/^#[a-fA-F0-9]+$/.test(part.value)) {
        return 'color';
      } else if (/^\d+$/.test(part.value)) {
        return 'numeric';
      } else if (/^\s+$/.test(part.value)) {
        return 'whitespace';
      } else {
        return 'other';
      }
    },
    updateContainingDiv() {
      const cssString = this.colorClasses.map((part) => part.value).join('');
      this.$refs.containingDiv.setAttribute('style', cssString);
      this.computedCss = cssString;
    },
  },
};
</script>


<style scoped>
/* Add styles for the CSS emulator component */
.code-editor {
  max-width: 300px;
  background-color: #1d1e22;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 2px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
}

.title {
  font-family: Lato, sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 1.57px;
  color: rgb(212, 212, 212);
}

.editor-content {
  margin: 0 10px 10px;
  color: white;
}

.property {
  width: calc(100% - 20px);
  margin-left: 10px;
  background-color: transparent;
  border: none;
  color: white;
}

.property:hover {
  cursor: text;
}

.color-0 {
    color: rgb(86 156 214);
}
.color-preview-1,
.color-preview-2 {
  height: 8px;
  width: 8px;
  border: 1px solid #fff;
  display: inline-block;
  margin-right: 3px;
}

.color-preview-1 {
  background-color: #1d1e22;
}

.color-preview-2 {
  background-color: rgba(0, 0, 0, 0.5);
}

.user-input {
  margin-bottom: 10px;
}

.user-input p {
  margin: 0;
}

.user-input .selector {
  color: rgb(86, 156, 214);
}

.user-input .delimiter {
  color: white;
}

.user-input .property-delimiter {
  color: white;
}

.user-input .color {
  color: rgb(156, 220, 254);
}

.user-input .numeric {
  color: rgb(207, 146, 120);
}

.user-input .whitespace {
  color: transparent;
}

</style>
