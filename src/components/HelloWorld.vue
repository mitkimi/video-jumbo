<template>
  <el-container class='container'>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>拾色器</span>
      </div>
      <div>
        <el-row :gutter="20">
          <Box v-for="o in colors" :key="o.id" :data="o"/>
        </el-row>
      </div>
    </el-card>
  </el-container>
</template>

<script>
import Box from '@/components/Box';

export default {
  name: 'HelloWorld',
  components: { Box },
  data() {
    return {
      colors: [
        {
          id: 1,
          name: 'Depth Sea',
          colors: ['#30cfd0', '#330867'],
        },
        {
          id: 2,
          name: 'Un-named Color',
          colors: ['#a8edea', '#fed6e3'],
        },
        {
          id: 3,
          name: 'Un-named Color',
          colors: ['#5ee7df', '#b490ca'],
        },
        {
          id: 4,
          name: 'Wild Apple',
          colors: ['#d299c2', '#fef9d7'],
        },
        {
          id: 5,
          name: 'Saint Petersburg',
          colors: ['#f5f7fa', '#c3cfe2'],
        },
        {
          id: 6,
          name: 'Arielles Smlie',
          colors: ['#19d9e4', '#3ac7d9'],
        },
        {
          id: 7,
          name: 'Un-named Color',
          colors: ['#a1c4fd', '#c2e9fb'],
        },
        {
          id: 8,
          name: 'Kaffic Lime',
          colors: ['#d4fc79', '#96e6a1'],
        },
        {
          id: 9,
          name: 'Un-named Color',
          colors: ['#84fab0', '#8fd3f4'],
        },
        {
          id: 10,
          name: 'Heavy Rain',
          colors: ['#cfd9df', '#e2ebf0'],
        },
        {
          id: 11,
          name: 'Amy Crisp',
          colors: ['#a6c0fe', '#f68084'],
        },
        {
          id: 12,
          name: 'Mean Fruit',
          colors: ['#fccb90', '#d57eeb'],
        },
        {
          id: 13,
          name: 'Un-named Color',
          colors: ['#c471f5', '#fa71cd'],
        },
        {
          id: 14,
          name: 'Green Apple',
          colors: ['#a4fc79', '#96e6a1'],
        },
        {
          id: 15,
          name: 'Un-named Color',
          colors: ['#48c6ef', '#6f86d6'],
        },
        {
          id: 16,
          name: 'Fresh Milk',
          colors: ['#feada6', '#f5efef'],
        },
        {
          id: 17,
          name: 'Snow Again',
          colors: ['#e6e9f0', '#eef1f5'],
        },
        {
          id: 18,
          name: 'February Ink',
          colors: ['#accbee', '#e7f0fd'],
        },
        {
          id: 19,
          name: 'Un-named Color',
          colors: ['#e0c3fc', '#8ec5fc'],
        },
        {
          id: 20,
          name: 'Un-named Color',
          colors: ['#f093fb', '#f5576c'],
        },
        {
          id: 21,
          name: 'Gray Sky',
          colors: ['#fdfbfb', '#ebedee'],
        },
        {
          id: 22,
          name: 'Malibu Beach',
          colors: ['#4facfe', '#00f2fe'],
        },
        {
          id: 23,
          name: 'New Life',
          colors: ['#43e97b', '#38f9d7'],
        },
        {
          id: 24,
          name: 'True Sunset',
          colors: ['#fa709a', '#fee140'],
        },
        {
          id: 25,
          name: 'Un-named Color',
          colors: ['#96fbc4', '#f9f586'],
        },
        {
          id: 26,
          name: 'Un-named Color',
          colors: ['#2af598', '#009efd'],
        },
        {
          id: 27,
          name: 'Un-named Color',
          colors: ['#cd9cf2', '#f6f3ff'],
        },
        {
          id: 28,
          name: 'Old Hat',
          colors: ['#e2e58b', '#7eddd9'],
        },
        {
          id: 29,
          name: 'Star Wine',
          colors: ['#b965d7', '#ef619d'],
        },
        {
          id: 30,
          name: 'Deep Blue',
          colors: ['#6a11cb', '#2575fc'],
        },
        {
          id: 31,
          name: 'Un-named Color',
          colors: ['#ff9a9e', '#fad0c4'],
        },
        {
          id: 32,
          name: 'a18cd1',
          colors: ['#a18cd1', '#fbc2eb'],
        },
        {
          id: 33,
          name: 'Un-named Color',
          colors: ['#fad0c4', '#ffd1ff'],
        },
        {
          id: 34,
          name: 'Juicy Peach',
          colors: ['#ffecd2', '#fcb69f'],
        },
        {
          id: 35,
          name: 'Young Passion',
          colors: ['#ff867b', '#b3295a'],
        },
        {
          id: 36,
          name: 'Lady Lips',
          colors: ['#ff9a9e', '#fecfef'],
        },
        {
          id: 37,
          name: 'Un-named Color',
          colors: ['#e5e4e0', '#cfcac4'],
        },
        {
          id: 38,
          name: 'Un-named Color',
          colors: ['#37ecba', '#72afd3'],
        },
        {
          id: 39,
          name: 'Un-named Color',
          colors: ['#ebbba7', '#cfc7f8'],
        },
        {
          id: 40,
          name: 'New York',
          colors: ['#fff1eb', '#ace0f9'],
        },
        {
          id: 41,
          name: 'Shy Rainbow',
          colors: ['#90afdd', '#7fc3da'],
        },
        {
          id: 42,
          name: 'Loon Crest',
          colors: ['#959595', '#606060'],
        },
        {
          id: 43,
          name: 'Plum Plate',
          colors: ['#667eea', '#764ba2'],
        },
        {
          id: 44,
          name: 'Everlasting Sky',
          colors: ['#fdfcfb', '#e2d1c3'],
        },
        {
          id: 45,
          name: 'Happy Fisher',
          colors: ['#89f7fe', '#66a6ff'],
        },
        {
          id: 46,
          name: 'Blessing',
          colors: ['#fddb92', '#d1fdff'],
        },
        {
          id: 47,
          name: 'Sharpeye Eagle',
          colors: ['#9890e3', '#b1f4cf'],
        },
        {
          id: 48,
          name: 'Ladoga Bottom',
          colors: ['#ebc0fd', '#d9ded8'],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card {
  width: 100%;
}
</style>
