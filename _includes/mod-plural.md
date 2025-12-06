{%- assign _val = include.val %}
{%- assign _word_ = "[0] item,[1] item,[#n;] items" | split: "," %}
{%- assign _word = include.word | split: "," | default: _word_ %}
{%- if _val.size == 0 -%} {{ _word[0] }}
{%- elsif _val.size == 1 -%} {{ _word[1] }}
{%- elsif _val.size.size -%} {{ _word[2] | replace: '#n;', _val.size }}
{%- else -%} {{ _word[0] | replace: '[0]', '[no]' }}
{%- endif %}